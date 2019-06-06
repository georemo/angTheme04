import { Injectable } from '@angular/core';
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

  proc1(params) {
    console.log('starting ServerService::proc1(params)');
    params = {
      "ctx": "Sys",
      "m": "User",
      "c": "UserController",
      "a": "Login",
      "dat": { "username": "karl", "password": "secret" },
      "args": null
    };
    console.log('starting ServerService::proc1(params)...02');
    this.http.post(this.url, params, this.options).subscribe((res) => {
        console.log(res);
        //this.appState.setMode('anon');
      });
  }

  proc(params) {
    console.log('starting ServerService::proc(params)');
    // params = {
    //   "ctx": "Sys",
    //   "m": "User",
    //   "c": "UserController",
    //   "a": "Login",
    //   "dat": { "username": "karl", "password": "secret" },
    //   "args": null
    // };
    console.log('starting ServerService::proc(params)...02');
    return this.http.post(this.url, params, this.options);
  }

  async procAsync(params) {
    console.log('starting ServerService::procAsync(params)');
    params = {
      "ctx": "Sys",
      "m": "User",
      "c": "UserController",
      "a": "Login",
      "dat": { "username": "karl", "password": "secret" },
      "args": null
    };
    console.log('starting ServerService::procAsync(params)...02');
    let ret = await this.http.post(this.url, params, this.options).toPromise();
    console.log('procAsync::ret>>');
    console.dir(ret);
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

  /*
   *  testing async
   */
  async foo(params) {
    try {
      const val = await this.proc(params);
      console.log(val);
      return val;
    }
    catch (err) {
      console.log('Error: ', err.message);
    }
  }
}
