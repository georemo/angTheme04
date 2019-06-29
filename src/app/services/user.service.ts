import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { AppStateService } from './app-state.service';
import { MenuService } from './menu.service';
import { NotificationService } from './notification.service';
import { SchedulerService } from './scheduler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private postData;
  userData;
  userName;
  contacts;
  constructor(
    private svAppState: AppStateService,
    private svServer: ServerService,
    private svMenu: MenuService,
    private svNotif: NotificationService,
    private svScheduler: SchedulerService
  ) { }

  /*
    set userData
    set contacts
    */
  init(res) {
    this.userData = res['data']['user_data'];
    this.userName = this.userData[0]['fname'] + ' ' + this.userData[0]['lname'];
  }

  getUserData(loginResp) {
    this.setUserDataPost(loginResp);
    /*
    post login request to server
    */
    this.svServer.proc(this.postData).subscribe((res) => {
      console.log(res);
      this.setUserData(res);
    });
  }

  setUserDataPost(loginResp) {
    /*
    set post data
    */
    this.postData = {
      ctx: 'Sys',
      m: 'Moduleman',
      c: 'ModulesController',
      a: 'GetModuleUserData',
      dat: {
        'fields': null,
        'token': loginResp['app_state']['sess']['cd_token']
      },
      args: null
    }
  }

  setUserData(res) {
    console.log('starting setUserData(res)');
    console.log(res);
    this.init(res);
    this.svMenu.init(res);
    this.svNotif.init(res);
    this.svScheduler.init(res);
    this.svAppState.setMode('anon');
  }
}
