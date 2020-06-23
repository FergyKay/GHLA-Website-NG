import { DataService } from './../../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IsoLanguages } from 'src/app/helpers/iso-languages';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css', '../digi-library-assets/css/style.css']
})
export class ContentViewComponent implements OnInit {
  contentDetails;
  ebookUrl;
  audiobookurl;
  videosUrl;

  ebooks = []
  audioBooks = []
  videos = []


  ebookNavLinksLoaded = false;
  audiobooksNavLinksLoaded = false;
  videosNavLinksLoaded = false;


  ebooksLoading = true
  audiobooksLoading = true
  videosLoading = true

  ebookNavLinks;
  audiobookNavLinks;
  videosNavLinks;

  isoLanguages = new IsoLanguages()


  constructor(private router: Router, private activatedRoute: ActivatedRoute,private data:DataService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.contentDetails = JSON.parse(params.meta)
      this.ebookUrl = this.contentDetails.link[0]._attributes.href;
      this.audiobookurl = this.contentDetails.link[1]._attributes.href;
      this.videosUrl = this.contentDetails.link[2]._attributes.href;
      this.makeBulkRequest()
    })
  }

  makeBulkRequest() {


    this.data.pullFromFeed(this.ebookUrl).then(res => {
      this.data.getFeedNavLinks().then(navLinks => {
        this.ebookNavLinks = navLinks
      })

      let ebk = res as any;

      // console.log(ebk)



      try {
        ebk.forEach(bk => {
          let coverUrl, resourceUrl
          bk.link.forEach(element => {
            switch (element._attributes.type) {
              case "image/jpeg":
              case "image/png":
                coverUrl = element._attributes.href;
                break;

              case "application/epub+zip":
              case "application/zip":
                resourceUrl = element._attributes.href
            }
          });

          let book;

          try {
            book = {
              title: bk.title._text,
              id: bk.id._text,
              author: this.getAuthor(bk.author),
              summary: bk.summary._text,
              cover: coverUrl,
              resource: resourceUrl,
              publisher: bk['dcterms:publisher']._text,
              language:  this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)
            }

          } catch (error) {
            book = {
              title: bk.title._text,
              id: bk.id._text,
              author: this.getAuthor(bk.author),
              summary: "No Description Available",
              cover: coverUrl,
              resource: resourceUrl,
              publisher: bk['dcterms:publisher']._text,
              language:  this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)

            }
          }







          this.ebookNavLinksLoaded = true
          this.ebooks.push(book)
          this.ebooksLoading = false
        });
      } catch (error) {


        try {
          let coverUrl, resourceUrl
          ebk.link.forEach(element => {
            switch (element._attributes.type) {
              case "image/jpeg":
              case "image/png":
                coverUrl = element._attributes.href;
                break;

              case "application/epub+zip":
              case "application/zip":
                resourceUrl = element._attributes.href
            }
          });

          // console.log(coverUrl)

          let book;
          try {
            book = {
              title: ebk.title._text,
              id: ebk.id._text,
              author: this.getAuthor(ebk.author),
              summary: ebk.summary._text,
              cover: coverUrl,
              resource: resourceUrl,
              publisher: ebk['dcterms:publisher']._text,
              language:  this.isoLanguages.getLanguageNameFromCode(ebk['dcterms:language']._text)

            }
          } catch (error) {
            book = {
              title: ebk.title._text,
              id: ebk.id._text,
              author: this.getAuthor(ebk.author),
              summary: "No Summary Available",
              cover: coverUrl,
              resource: resourceUrl,
              publisher: ebk['dcterms:publisher']._text,
              language:  this.isoLanguages.getLanguageNameFromCode(ebk['dcterms:language']._text)

            }
          }


          // url = url.replace(/^http:\/\//i, 'https://');


          this.ebookNavLinksLoaded = true
          this.ebooks.push(book)
          this.ebooksLoading = false

        } catch (error) {
          this.ebooksLoading = false
          this.ebooks = []
          this.ebookNavLinksLoaded = false
        }



      }




      //  this.ebooks = res
    }).then(() => {
      this.data.pullFromFeed(this.audiobookurl).then(res => {

        this.data.getFeedNavLinks().then(navLinks => {
          this.audiobookNavLinks = navLinks
        })

        let audibk = res as any;

        try {
          audibk.forEach(bk => {
            let coverUrl
            let playlist = []


            bk.link.forEach(element => {
              switch (element._attributes.type) {
                case "image/jpeg":
                case "image/png":

                  coverUrl = element._attributes.href;
                  break;

                case "audio/mpeg":
                case "audio/mp3":
                  playlist.push(element._attributes.href)
              }
            });


            let adbk;

            try {
              adbk = {
                title: bk.title._text,
                id: bk.id._text,
                author: this.getAuthor(bk.author),
                summary: bk.summary._text,
                cover: coverUrl,
                playlist: playlist,
                publisher: bk['dcterms:publisher']._text,
                language:  this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)

              }
            } catch (error) {
              adbk = {
                title: bk.title._text,
                id: bk.id._text,
                author: this.getAuthor(bk.author),
                summary: "No Description Available",
                cover: coverUrl,
                playlist: playlist,
                publisher: bk['dcterms:publisher']._text,
                language:  this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)


              }
            }



            this.audioBooks.push(adbk)
            this.audiobooksLoading = false
            this.audiobooksNavLinksLoaded = true


          });
        } catch (error) {
          try {
            let coverUrl
            let playlist = []

            audibk.link.forEach(element => {
              switch (element._attributes.type) {
                case "image/jpeg":
                case "image/png":

                  coverUrl = element._attributes.href;
                  break;

                case "audio/mpeg":
                case "audio/mp3":
                  playlist.push(element._attributes.href)
              }
            });


            let adbk = {
              title: audibk.title._text,
              id: audibk.id._text,
              author: this.getAuthor(audibk.author),
              summary: audibk.summary._text,
              cover: coverUrl,
              playlist: playlist,
              publisher: audibk['dcterms:publisher']._text,
              language:  this.isoLanguages.getLanguageNameFromCode(audibk['dcterms:language']._text)


            }

            this.audioBooks.push(adbk)
            this.audiobooksLoading = false
            this.audiobooksNavLinksLoaded = true

          } catch (error) {
            this.audiobooksLoading = false
            this.audioBooks = []
            this.audiobooksNavLinksLoaded = false
          }
        }

      }).catch(e => {

      })
    }).then(() => {
      this.data.pullFromFeed(this.videosUrl).then(res => {
        this.data.getFeedNavLinks().then(navLinks => {
          this.videosNavLinks = navLinks
        })
        let video = res as any;

        // console.log(video)

        try {
          video.forEach(bk => {
            let coverUrl
            let playlist = []

            bk.link.forEach(element => {
              switch (element._attributes.type) {
                case "image/jpeg":
                case "image/png":

                  coverUrl = element._attributes.href;
                  break;

                case "video/mp4":
                  playlist.push(element._attributes.href)
              }
            });


            let vd = {
              title: bk.title._text,
              id: bk.id._text,
              author: this.getAuthor(bk.author),
              summary: bk.summary._text,
              cover: coverUrl,
              playlist: playlist,
              publisher: bk['dcterms:publisher']._text,
              language:  this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)

              

            }



            this.videosNavLinksLoaded = true
            this.videos.push(vd)
            this.videosLoading = false


          });
        } catch (error) {

          try {
            let coverUrl
            let playlist = []

            // console.log(video)

            video.link.forEach(element => {
              switch (element._attributes.type) {
                case "image/jpeg":
                case "image/png":

                  coverUrl = element._attributes.href;
                  break;

                case "video/mp4":
                  playlist.push(element._attributes.href)
              }
            });


            let vd = {
              title: video.title._text,
              id: video.id._text,
              author: this.getAuthor(video.author),
              summary: video.summary._text,
              cover: coverUrl,
              playlist: playlist,
              publisher: video['dcterms:publisher']._text,
              language:  this.isoLanguages.getLanguageNameFromCode(video['dcterms:language']._text)


            }

            // console.log(vd)



            this.videosNavLinksLoaded = true
            this.videos.push(vd)
            this.videosLoading = false


          } catch (error) {
            // console.log(error)
            this.videosNavLinksLoaded = false
            this.videos = []
            this.videosLoading = false
          }


        }




      }).catch(e => {

      })
    })

  }

  getAuthor(authoObj) {
    try {
      return (authoObj.name._text)
    } catch (error) {
      return (authoObj[0].name._text)
    } finally {
      // return "No Author Information"
    }
  }





}
