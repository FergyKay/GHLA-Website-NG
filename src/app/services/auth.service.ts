import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from './user';
import * as jwtDecode from 'jwt-decode'






@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  currentUser = {};



  constructor(private http: HttpClient, public router: Router) {

  }

  login(loginBody) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiEndpoint + '/auth/signin', loginBody).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })

  }

  public getToken(): string {
    return localStorage.getItem('grant');
  }


  isValidToken() {
    let isTokenValid;
    try {
      isTokenValid = this.validateTokenLife(jwtDecode(localStorage.getItem('grant')))
    } catch (error) {
      isTokenValid = false
    }
      return isTokenValid
  }


  validateTokenLife(decodeToken: any) {
    try {
      if (decodeToken == null) {
        return false
      }
      return (Date.now() / 1000 < decodeToken.exp)

    } catch (error) {
     return false
    }

  }



  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();

  //   // return tokenNotExpired(null, token);

  // }

  // fetchProfessions(): Observable<Object> {
  //   // return this.http.get('https://api.ghanalibrary.org/professions')
  // }


  // fetchLibraries(): Observable<Object> {
  //   // return this.http.get('https://api.ghanalibrary.org/setup');

  // }





}

