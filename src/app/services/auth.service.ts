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
  verificationCode;


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


  signup(signupBody){
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiEndpoint + '/auth/signup', signupBody).subscribe(res => {
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



  requestPasswordReset(username) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiEndpoint + '/auth/reset?username=' + username).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }

  validateToken(token, username) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiEndpoint + "/auth/otp/confirm?username=" + username + "&token=" + token).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }

  setVerificationCode(code){
    this.verificationCode = code;
  }

  getVerificationCode(){
    return this.verificationCode
  }

  resetPassword(body){
    return new Promise((resolve, reject) => {
      this.http.put(environment.apiEndpoint + "/auth/reset",body).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }

  updatePassword(password){
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiEndpoint + "/auth/password",password).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }

  getProfile() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiEndpoint + "/profile").subscribe(res => {
       this.currentUser = res
       localStorage.setItem("user",JSON.stringify(this.currentUser))
       resolve(res)
      }, err => {
        reject(err)
      })
    })

  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"))
  }

  submitFeedBack(body) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiEndpoint + "/support",body).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }






}

