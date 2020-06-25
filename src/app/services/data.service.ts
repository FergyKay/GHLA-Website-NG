import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FeedParser } from '../injectors/feed-parser';
import { ThrowStmt } from '@angular/compiler';
import { error } from 'protractor';






@Injectable({
  providedIn: 'root'
})

export class DataService {
  feedUrl = "https://opds.ghanalibrary.org"

  feedParser = new FeedParser(this.http)
  




  // navIsLastButOne = false

  constructor(private http: HttpClient) {

  }

  getInitialFeed() {
    return new Promise(resolve => {
      this.feedParser.pullFeed(this.feedUrl).then(() => {
        resolve(this.feedParser.getEntries())
      })
    })
  }

  getSearchUrls() {
    return this.feedParser.getSearch()
  }

  getIsPenUlView(url) {
    return this.feedParser.getIsPenContentField(url)
  }


  getFeedEntries() {
    return this.feedParser.getEntries()
  }


  getFeedTitle() {
    return this.feedParser.getTitle()
  }

  pullFromFeed(url) {
    return new Promise(resolve => {
      this.feedParser.pullFeed(url).then(() => {
        resolve(this.feedParser.getEntries())
      }).catch(e => {

      })
    })
  }

  getFeedNavLinks() {
    return new Promise(resolve => {
      this.feedParser.getFeedNavLinks().then(links => {
        resolve(links)
      })
    })

  }

  getLibraries() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiEndpoint+'/setup').subscribe(res=>{
        resolve((res as any).libraries[0].branches)
       
      },error=>{
          console.log(error)
      })
    })
  }

  getProfessions(){
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiEndpoint+'/professions').subscribe(res=>{
        resolve(res)
      },error=>{
          console.log(error)
      })
    })
  }



  // getProfessions() {
  //   return new Promise((resolve, reject) => {
  //     this.httpHandler.request("GET", "professions", false).then(res => {
  //       this.professions = JSON.parse((<any>res).content)
  //       resolve()
  //     }, rej => {
  //       reject(rej)
  //     }).catch(e => {

  //     })
  //   }).catch(e => {

  //   })
  // }

  // getProfessionsSync() {
  //   return this.professions
  // }

  // getLibrariesProtected(regionId) {
  //   return new Promise((resolve, reject) => {
  //     this.httpHandler.request("GET", "libraries/1/branches?region_id=" + regionId, true).then(res => {
  //       resolve(JSON.parse((<any>res).content))
  //     }, rej => {
  //       reject(rej)
  //     })
  //   })
  // }

    getLibrariesProtected(regionId) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiEndpoint+"/libraries/1/branches?region_id=" + regionId).subscribe(res => {
        resolve((<any>res))
      }, error => {
        reject(error)
      })
    })
  }

  getRegions() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiEndpoint+"/countries/85").subscribe(res => {
        resolve((<any>res).regions)
      }, rej => {
        reject(rej)
      })
    })
  }

  // getProfile() {
  //   return new Promise((resolve, reject) => {
  //     this.httpHandler.request("GET", "profile", true).then(res => {
  //       this.user = res
  //       console.log(res)
  //       resolve(res)
  //     }, rej => {
  //       console.log(rej)
  //       reject(rej)
  //     })
  //   })

  // }

  // updateProfile(body) {
  //   return new Promise(resolve => {
  //     this.httpHandler.request("PUT", "profile", true, body).then(res => {
  //       this.user = res
        
  //       resolve(res)
  //     })
  //   })
  // }

  // getUser() {
  //   return this.user
  // }

  getVendors() {
    return new Promise(resolve => {
      this.http.get('http://142.11.195.10/digital_library/api/v0/vendors').subscribe(res => {
        resolve(res)
      })
    })
  }


  // getEvents() {
  //   return new Promise((resolve,reject) => {
  //     this.httpHandler.request("GET", "events", true).then(res => {
  //       resolve(res)
  //     }).catch(e=>{
  //         reject(e)
  //     })
  //   })
  // }


  search(queryTerms) {
    return new Promise((resolve, reject) => {
      this.getSearchUrls().forEach(element => {
        Object.keys(element).forEach(key => {
          if (key === "search") {
            this.feedParser.search("https://opds.ghanalibrary.org/search.atom?q=" + encodeURI(queryTerms)).then(res => {
              if (Object.keys((<any>res).feed.entry).length == 0) {
                reject(true)
              } else {
                resolve((<any>res).feed)
              }
            })
          }
        })
      });
    })
  }

  searchNavigation(navUrl) {
    return new Promise((resolve, reject) => {
      this.feedParser.search(navUrl).then(res => {
        resolve((<any>res).feed)
      })
    })

  }


  // submitFeedBack(body) {
  //   return new Promise(resolve => {
  //     this.httpHandler.request("POST", "support", true, body).then(res => {
  //       resolve(res)
  //     })
  //   })
  // }
}
