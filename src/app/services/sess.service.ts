import { Injectable, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as moment from 'moment';

import { ServerService } from './server.service';
import { AppStateService } from './app-state.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SessService {
  countdown;
  distance;
  subscription;
  maxDistance;
  countDownDate;
  endTime;
  postData;
  config = {
    countdown: false
  };

  constructor(
    private svAppState: AppStateService, /* injecting access to appState. Dectates layout modes eg login, anon, private */
    private svServer: ServerService,
    private svUser: UserService,
  ) {

  }

  /*
  Every time successfull response come from server, 
  it needs to update the client session to extend the Expiration time
  */
  createSess(res) {
    console.log('starting createSess(res)');
    this.setSess(res);
    this.svUser.getUserData(res);
  }

  setSess(res) {
    console.log('starting setSess(res)');
    const sess = res.app_state.sess;
    const ttl = sess.ttl;
    this.maxDistance = Number(ttl) * 1000;
    localStorage.setItem('maxDistance', this.maxDistance);
    localStorage.setItem('sess', JSON.stringify(sess));
    localStorage.setItem('ExprTime', this.getExprTime(ttl));
    if (this.config.countdown) {
      this.countDown(this.getExprTime(ttl));
    }

  }

  resetExprTime(ttl) {
    console.log('starting resetExprTime(ttl)');
    const exprTime = moment().add(ttl, 'seconds');
    localStorage.setItem('ExprTime', exprTime.toString());
  }

  getExprTime(ttl) {
    console.log('starting getExprTime(ttl)');
    const exprTime = moment().add(ttl, 'seconds');
    console.log(exprTime.toString());
    return moment().add(ttl, 'seconds').toString();
  }

  logout() {
    console.log('starting logout()');
    this.killSess();
    // set gui to loged out state
    this.svAppState.setMode('login');
  }

  killSess() {
    console.log('starting killSess()');
    localStorage.removeItem('sess');
    localStorage.removeItem('ExprTime');
    clearTimeout(this.countdown);
    this.killSessServer();
  }

  async killSessServer() {
    const data = {
      action: 'kill',
      dat: null
    }
    this.setSessPost(data);
    /*
    post login request to server
    */
    this.svServer.proc(this.postData).subscribe((res) => {
      console.log(res);
    });

  }

  async renewSessServer() {
    const data = {
      action: 'renew',
      dat: null
    }
    this.setSessPost(data);
    /*
    post login request to server
    */
    this.svServer.proc(this.postData).subscribe((res) => {
      console.log(res);
    });

  }

  setSessPost(data) {
    /*
    set post data
    */
    this.postData = {
      ctx: 'Sys',
      m: 'User',
      c: 'SessionController',
      a: data.action,
      dat: data.dat,
      args: null
    };
  }

  public isLoggedIn() {
    // console.log('starting isLoggedIn()');
    const ret = moment().isBefore(this.getExpiration());
    // console.log('ret>>');
    // console.log(ret);
    return ret;
  }

  isLoggedOut() {
    // console.log('starting isLoggedOut()');
    return !this.isLoggedIn();
  }

  getExpiration() {
    // console.log('starting getExpiration()');
    const expiration = localStorage.getItem('ExprTime');
    // console.dir(expiration);
    // return moment(expiration);
    const ret = new Date(expiration);
    // console.log('ret>>');
    // console.log(ret);
    return ret;
  }

  getSessData() {
    console.log('starting getSessData()');
    const expiration = localStorage.getItem('sess');
    return JSON.parse(expiration);
  }

  getCdToken() {
    console.log('starting getCdToken()');
    return this.getSessData().cd_token;
  }

  getJWToken() {
    console.log('starting getJWToken()');
    return this.getSessData().jwt;
  }

  getTtl() {
    console.log('starting getTtl()');
    return this.getSessData().ttl;
  }

  /*
  Every time successfull response come from server, 
  it needs to update the client session to extend the Expiration time
  */
  renewSess(res) {
    console.log('starting renewSess(res)');
    this.setSess(res);
  }

  countDown(endTime) {
    this.endTime = endTime;
    // Set the date we're counting down to
    // const countDownDate = new Date('Jan 5, 2021 15:37:25').getTime();
    this.countDownDate = new Date(endTime).getTime();

    // Update the count down every 1 second
    this.countdown = setInterval(() => {

      // Get today's date and time
      const now = new Date().getTime();

      console.log('this.countDownDate:');
      console.log(this.countDownDate);
      console.log('now:');
      console.log(now);
      // Find the distance between now and the count down date
      this.distance = this.countDownDate - now;
      console.log('distance:');
      console.log(this.distance);

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById('demo').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      console.log(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');

      // If the count down is finished, write some text
      if (this.distance < 0) {
        clearInterval(this.countdown);
        // document.getElementById('demo').innerHTML = 'EXPIRED';
        console.log('session expired');
        this.logout();
      }
      if (this.distance == this.maxDistance) {
        // let subRet;
        // this.subscription =
        //   fromEvent(document, 'mousemove')
        //     .subscribe( e => {
        //       // console.log(e);
        //       if (this.isLoggedIn()) {
        //         console.log('loggedin == ture')
        //         subRet = new Date(endTime).getTime();
        //         console.log('subRet>>');
        //         console.dir(subRet);
        //         this.countDownDate = subRet;
        //       }
        //     });


      }
    }, 4000);
  }

  resetCountDown() {
    clearTimeout(this.countdown);
    const ttl = this.getTtl;
    // this.resetExprTime(ttl);
    // this.distance += (Number(ttl) * 1000);
    this.countDown(ttl);
  }

  
  

}
