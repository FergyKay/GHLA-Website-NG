import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FeedParser } from '../injectors/feed-parser';






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





  // getLibraries() {
  //   return new Promise((resolve, reject) => {
  //     this.httpHandler.request("GET", "setup", false).then(res => {
  //       resolve((<any>res).content.toJSON().libraries[0].branches)
  //     }, rej => {
  //       reject(rej)
  //     }).catch(e => {
  //       reject(e)
  //     })
  //   })
  // }

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

  // getRegions() {
  //   return new Promise((resolve, reject) => {
  //     this.httpHandler.request("GET", "countries/85", true).then(res => {
  //       resolve(JSON.parse((<any>res).content))
  //     }, rej => {
  //       reject(rej)
  //     })
  //   })
  // }

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

  // getVendors() {
  //   return new Promise(resolve => {
  //     this.httpHandler.reqExt("GET", 'http://142.11.195.10/digital_library/api/v0/vendors').then(res => {
  //       resolve(res)
  //     })
  //   })
  // }


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
