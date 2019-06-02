import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  public proc(params) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = {
      headers: headers
    };

    params = {
      "ctx": "Sys",
      "m": "User",
      "c": "UserController",
      "a": "Login",
      "dat": { "username": "karl", "password": "secret" },
      "args": null
    };

    this.http.post(this.url, params, options)
      .subscribe(data => {
        console.log("data from server1>>");
        console.log(data);
        //return data;
      });
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
