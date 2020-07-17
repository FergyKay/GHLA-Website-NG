// import { Injectable } from '@angular/core';
// import { UserAgent } from "./user-agent";
// import { StorageService } from "../services/storage.service";
// import * as jwtdecoder from 'jwt-decode';





// @Injectable({
//     providedIn: 'root'
//   })
  
// export class HttpHandler {
//     private baseUrl = "https://api.ghanalibrary.org/";
//     // private userAgent = new UserAgent().getBase64EncodedUserAgent();
//     private grantToken;
//     private renewToken;
//     private userAgent: any;
//     storage = new StorageService();
//     http: any;
   


//     constructor(userAgent: UserAgent) {

//     }


//     request(method: any, endpoint: string, secureMode: any, body?: any) {
//         // console.log("request")
//         if (secureMode) {
//             return new Promise((resolve, reject) => {
//                 this.storage.getFromStore("grant").then(token => {
//                     this.grantToken = token
//                     //  console.log(this.grantToken)
//                     // console.log(this.userAgent)

//                     try {
//                         this.validateTokenLife(jwtdecoder(this.grantToken)).then(res => {
//                             if (res) {
//                                 this.http.request({
//                                     url: this.baseUrl + endpoint,
//                                     method: method,
//                                     headers: {
//                                                 "user-agent": this.userAgent.getBase64EncodedUserAgent(),
//                                                 "Content-Type": "application/json",
//                                                 "Authorization": "Bearer " + this.grantToken
//                                             },
//                                             content: JSON.stringify(body)
//                                             }).then(response => {
//                                     resolve(response)
//                                 }).catch(e => {
//                                     reject(e)
//                                 })
//                             } else {
//                                 this.validateTokenLife(jwtdecoder(this.renewToken)).then(isRenewTokenValid => {
//                                     if (isRenewTokenValid) {
//                                         this.http.request({
//                                             url: this.baseUrl + endpoint,
//                                             method: method,
//                                             headers: {
//                                                 "user-agent": this.userAgent.getBase64EncodedUserAgent(),
//                                                 "Content-Type": "application/json",
//                                                 "Authorization": "Bearer " + this.grantToken
//                                             },
//                                             content: JSON.stringify(body)
//                                         }).then(response => {
//                                             resolve(response)
//                                         })
//                                     } else {
//                                         console.log("Error?")
//                                         return new Error("Logout now!!!")
//                                     }
//                                 }).catch(e=>{

//                                 })
    
//                             }
    
//                         }).catch(e => {
//                             console.log(e)
//                             reject(e)
//                         })
//                     } catch (error) {
//                          console.log(error)
//                          reject(error)
//                     }
                

//                 })
//             })
//         } else {
//             return new Promise((resolve, reject) => {
//                 // console.log(this.userAgent)
//                 this.http.request({
//                     url: this.baseUrl + endpoint,
//                     method: method,
//                     headers: {
//                         "User-Agent": this.userAgent.getBase64EncodedUserAgent(),
//                         "Content-Type": "application/json"
//                     },
//                     content: JSON.stringify(body)
//                 }).then(response => {
//                     // console.log(response)
//                     resolve(response)
//                 }).catch(e => {
//                     // console.log(e)
//                     reject(e)
//                 })
//             })
//         }
//     }


//     private validateTokenLife(decodeToken: any) {
//         try {
//             return new Promise(resolve => {

//                 if (decodeToken == null) {
//                     resolve(false)
//                 }
//                 resolve(Date.now() / 1000 < decodeToken.exp)

//             })
//         } catch (error) {
//             console.log(error)
//         }

//     }

    
// }
