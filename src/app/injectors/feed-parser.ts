import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as xmlJson from 'xml-js'

export class FeedParser {
    http: HttpClient
    responseJson;
    searchLinksArray = []

    constructor(http: HttpClient) {
        this.http = http
    }

    pullFeed(serverUrl) {
        // console.log(serverUrl)
        return new Promise(resolve => {

            this.getData(serverUrl).then(res => {
                if (res == true) {
                    resolve(true)
                } else {
                    console.log(res)
                }
            }, rej => {
                console.log(rej)

            }).catch(e => {
                console.log(e)
            })


            // this.getData(serverUrl).then(() => {
            // },rej=>{
            // }).catch(e => {
            //     console.log(e)
            // })
        })
    }

    search(url) {
        // url = url.replace(/^http:\/\//i, 'https://');

        return new Promise((resolve, reject) => {
            this.http.get(url, { responseType: 'text' }).subscribe(res => {
                resolve(this.convertToJsonObject(res))
            })
        }).catch((err) => {
            console.log(err)
            return err
        })
    }


    private getData(serverUrl) {
        // serverUrl = serverUrl.replace(/^http:\/\//i, 'https://');
        return new Promise((resolve, reject) => {
            let sub = this.http.get(serverUrl, { responseType: 'text' }).subscribe(res => {
                this.responseJson = this.convertToJsonObject(res)
                sub.unsubscribe()
                resolve(true)
            }, rej => {
                console.log(rej)
                console.log((<any>rej).statusText)
                // reject()
            })
        }).catch((err) => {
            // return err
        })



    }

    private convertToJsonObject(xml) {
        let jsonString = xmlJson.xml2json(xml, { compact: true, spaces: 2 }) as any;
        return JSON.parse(JSON.parse(JSON.stringify(jsonString)))
        //    this.getEntries()
    }


    getId() {
        return this.responseJson.feed.id._text
    }

    getTitle() {
        return this.responseJson.feed.title._text
    }

    getDateUpdated() {
        return this.responseJson.feed.updated._text
    }

    getAuthor() {
        return {
            name: this.responseJson.feed.author.name._text,
            uri: this.responseJson.feed.author.uri._text,
            email: this.responseJson.feed.author.email._text,
        }
    }

    getLinks() {
        let linksArray = []
        this.responseJson.feed.link.forEach(link => {
            linksArray.push(
                {
                    type: link._attributes.type,
                    title: link._attributes.title,
                    href: link._attributes.href,
                    ref: link._attributes.rel,
                }
            )
        });
        return linksArray;
    }

    getSearchDetails() {
        // let searchArray = []
        // if (this.isContentFeed()) {
        //     searchArray.push(
        //         {
        //             totalResults: this.responseJson.feed["opensearch:totalResults"]._text,
        //             itemsPerPage: this.responseJson.feed["opensearch:itemsPerPage"]._text,
        //             startIndex: this.responseJson.feed["opensearch:startIndex"]._text,
        //         }
        //     )
        //     return searchArray;
        // }
        // return searchArray;
    }

    getEntries() {
        return new Promise((resolve, reject) => {
            if (Object.keys(this.responseJson.feed.entry).length == 0) {
                reject(Error("no data"))
            } else {
                resolve(this.responseJson.feed.entry)
            }
        }).catch(err => {
            //  console.log(err)
        })
    }

    getFeedNavLinks() {
        return new Promise((resolve, reject) => {
            resolve(this.responseJson.feed.link)
        }).catch(err => {
            //  console.log(err)
        })
    }


    getSearch() {
        this.responseJson.feed.link.forEach(element => {
            let sObj = {}
            sObj[element._attributes.rel] = element._attributes.href
            this.searchLinksArray.push(sObj)
        });

        // console.log(this.searchLinksArray)
        return this.searchLinksArray
        // return new Prhis.responseJsonomise((resolve, reject) => {
        //     // if (Object.keys(this.responseJson..entry).length == 0) {
        //         // reject(Error("no data"))
        //     // } else {
        //         resolve(t)
        //     // }
        // }).catch(err => {
        //     //  console.log(err)
        // })
    }

    getEntry() {
        return this.responseJson.feed.entry
    }

    getIsPenContentField(url) {
        // url = url.replace(/^http:\/\//i, 'https://');

        return new Promise(resolve => {

            this.http.get(url, { responseType: 'text' }).subscribe(res => {
                let json = this.convertToJsonObject(res);
                // console.log(json)
                try {
                    if (json.feed.entry[0].link.length == 4) {
                        resolve(true);
                    } else {
                        resolve(false)
                    }
                } catch (error) {
                   resolve(false)
                }

            })

        })


        // if(typeof(this.responseJson.feed.entry[0].link.length)=="undefined"){
        //     return false
        // }if(this.responseJson.feed.entry[0].link.length==3)
        // return true
        // console.log(this.responseJson.feed.entry[0].link.length)


    }

    isContentFeed() {
        // let isRootFeed = false
        // let element
        // // console.log(this.responseJson.feed.entry)
        // try {
        //     for (let index = 0; index < this.responseJson.feed.link.length; index++) {
        //         element = this.responseJson.feed.entry[0].link[index];
        //         if (element._attributes.type === "application/epub+zip" || element._attributes.type === "application/zip") {
        //             isRootFeed = true;
        //             break;
        //         }
        //     }
        // } catch (error) {
        //     //  console.log(error+" first pass")
        //     try {
        //         for (let index = 0; index < this.responseJson.feed.link.length; index++) {
        //             element = this.responseJson.feed.entry.link[index];
        //             if (element._attributes.type === "application/epub+zip" || element._attributes.type === "application/zip") {
        //                 isRootFeed = true;
        //                 break;
        //             }
        //         }
        //     } catch (error) {
        //         //     console.log(error+" second pass")

        //         // console.log(this.responseJson.feed.entry)
        //         isRootFeed = false
        //     }
        // }
        // return isRootFeed;
    }
}
