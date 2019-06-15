import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SessService } from './sess.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private sess: SessService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    // const idToken = localStorage.getItem('id_token');

    const jwt = this.sess.getJWToken();
    if (jwt) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + jwt)
      });

      ///////////////////////////////////////////////
      // Test Adding Headers...as opposed to set()
      // if this works, we adopt it instead of the above snipet that is bound to
      // replace existing data. It also allows us to append more header items
      this.addExtraHeaders(req.headers);
      ///////////////////////////////////////////////

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }

  }

  private addExtraHeaders(headers: HttpHeaders): HttpHeaders {
    headers = headers.append('myHeader', 'abcd');
    return headers;
  }
}
