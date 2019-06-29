import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://localhost:8080/api/';
  options;


  constructor(private http: HttpClient) {
    const h = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = {
      headers: h
    };

  }

  proc(params) {
    console.log('starting ServerService::proc(params)');
    return this.http.post(this.url, params, this.options);
  }

  async procAsync(params) {
    console.log('starting ServerService::procAsync(params)');
    let ret = await this.http.post(this.url, params, this.options).toPromise();
    console.log('procAsync::ret>>');
    console.dir(ret);
    return ret;
  }

  /*
   *  testing vanilla js ajax
   */
  postXhr(data) {
    console.log('starting postXhr(data)...01');
    const http = new XMLHttpRequest();
    console.log('starting postXhr(data)...02');
    const url = this.url;
    //const params = 'orem=ipsum&name=binny';
    //var data = { one: 'first', two: 'second' };
    const params = $.param(data);
    http.open('POST', url, true);

    // Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function () { // Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        console.log('starting postXhr(data)...03');
        console.dir(http.responseText);
      }
    }
    http.send(data);
  }

}
