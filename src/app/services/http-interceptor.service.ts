import { User } from './user';
import { UserAgent } from './../injectors/user-agent';
import { AuthenticationService } from './auth.service';
import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {


  constructor(public auth: AuthenticationService,private userAgent:UserAgent) { } 
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`,
        "User-Agent": this.userAgent.getBase64EncodedUserAgent(),
        "Origin":"https://ghanalibrary.org"
      }
    }); return next.handle(request);
  }

}
