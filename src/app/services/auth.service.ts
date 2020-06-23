import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable , throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from './user';



@Injectable({
    providedIn: 'root'
  })

  export class AuthenticationService {
  // endpoint: string = 'https://api.ghanalibrary.org';
  // headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
    lib: any;
    

    constructor(private http: HttpClient, public router: Router){
      console.log(this.lib);
    }

  //   // Sign-up
  // signUp(user: User): Observable<any> {
  //   let api = `${this.endpoint}/auth/signup`;
  //   return this.http.post(api, user)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  // // Sign-in
  // signIn(user: User) {
  //   return this.http.post<any>(`${this.endpoint}/auth/signin`, user)
  //     .subscribe((res: any) => {
  //       localStorage.setItem('access_token', res.token)
  //       this.getUserProfile(res._id).subscribe((res) => {
  //         this.currentUser = res;
  //         this.router.navigate(['Signinhome/' + res.msg._id]);
  //       })
  //     })
  // }

  // getToken() {
  //   return localStorage.getItem('access_token');
  // }

  // get isLoggedIn(): boolean {
  //   let authToken = localStorage.getItem('access_token');
  //   return (authToken !== null) ? true : false;
  // }

  // doLogout() {
  //   let removeToken = localStorage.removeItem('access_token');
  //   if (removeToken == null) {
  //     this.router.navigate(['Signin']);
  //   }
  // }

  // // User profile
  // getUserProfile(id): Observable<any> {
  //   let api = `${this.endpoint}/user-profile/${id}`;
  //   return this.http.get(api, { headers: this.headers }).pipe(
  //     map((res: Response) => {
  //       return res || {}
  //     }),
  //     catchError(this.handleError)
  //   )
  // }

  // // Error 
  // handleError(error: HttpErrorResponse) {
  //   let msg = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     msg = error.error.message;
  //   } else {
  //     // server-side error
  //     msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(msg);
  // }

   

    fetchProfessions(): Observable<Object>{
      return this.http.get('https://api.ghanalibrary.org/professions')
    }


    fetchLibraries(): Observable<Object>{
      return this.http.get('https://api.ghanalibrary.org/setup');

    }

    

    
  
  }

