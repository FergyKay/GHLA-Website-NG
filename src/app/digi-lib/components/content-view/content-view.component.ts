import { DataService } from './../../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IsoLanguages } from 'src/app/helpers/iso-languages';
import { json2xml } from 'xml-js';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css', '../digi-library-assets/css/style.css']
})
export class ContentViewComponent implements OnInit {

  courseName;
  ebookUrl;
  audioBookUrl;
  videoUrl;


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

  feedNavigationLinks = []


  navigationStack = []

  initial;
  initialCourseName;



  constructor(private router: Router, private activatedRoute: ActivatedRoute,private data:DataService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.courseName = params.title
      this.ebookUrl = params.ebooks
      this.audioBookUrl = params.audiobooks
      this.videoUrl = params.videos

      this.initial = params.initial
      this.initialCourseName = params.title

      this.feedNavigationLinks = []



      JSON.parse(params.navLinks).forEach(element => {
        if (element._attributes.rel === "http://opds-spec.org/facet") {
          this.feedNavigationLinks.push(element)
        }
      });

      this.makeBulkRequest()
    })
  }

  makeBulkRequest() {

    this.ebooks = []
    this.audioBooks = []
    this.videos = []


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
    }).catch(e=>{

    })

    this.data.pullFromFeed(this.audioBookUrl).then(res => {

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
                playlist.push({url:element._attributes.href,title:element._attributes.title})
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
              playlist:  JSON.stringify(playlist),
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
              playlist:  JSON.stringify(playlist),
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
                playlist.push({url:element._attributes.href,title:element._attributes.title})
            }
          });


          let adbk = {
            title: audibk.title._text,
            id: audibk.id._text,
            author: this.getAuthor(audibk.author),
            summary: audibk.summary._text,
            cover: coverUrl,
            playlist:  JSON.stringify(playlist),
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

    this.data.pullFromFeed(this.videoUrl).then(res => {
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
                playlist.push({url:element._attributes.href,title:element._attributes.title})
            }
          });


          let vd = {
            title: bk.title._text,
            id: bk.id._text,
            author: this.getAuthor(bk.author),
            summary: bk.summary._text,
            cover: coverUrl,
            playlist:  JSON.stringify(playlist),
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
                playlist.push({url:element._attributes.href,title:element._attributes.title})
            }
          });


          let vd = {
            title: video.title._text,
            id: video.id._text,
            author: this.getAuthor(video.author),
            summary: video.summary._text,
            cover: coverUrl,
            playlist:  JSON.stringify(playlist),
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

  showDetails(ebook){
    this.router.navigate(["/home/ebook-details"],{queryParams:{ebook:JSON.stringify(ebook)}})
  }

  showAudiobook(audiobook){
    this.router.navigate(["/home/audiobook-details"],{queryParams:{audiobook:JSON.stringify(audiobook)}})
  }

  showVideo(video){
    this.router.navigate(["/home/video-details"],{queryParams:{video:JSON.stringify(video)}})
  }

  pushNvLink(href, title) {
    this.navigationStack.push({ link: href, title: title })
    this.loadSubCategory(href, title)
  }



  popNavStack() {
    // console.log(this.navigationStack.length)
    try {
      this.navigationStack.pop()
      this.loadSubCategory(this.navigationStack[this.navigationStack.length - 1].link, this.navigationStack[this.navigationStack.length - 1].title)
    } catch (error) {
      // console.log(error)
      // console.log(this.initialCourseName)
      this.courseName = this.initialCourseName
      this.loadSubCategory(this.initial, this.initialCourseName)
    }

  }

  loadSubCategory(href, title) {
    this.ebooksLoading = true
    this.audiobooksLoading = true
    this.videosLoading = true

    this.feedNavigationLinks = []
    // setTimeout(() => {
    //   loader.hide()
    // }, 15000)


   
    // loader.show()


    this.data.pullFromFeed(href).then(entries => {

      this.data.getFeedNavLinks().then(links => {
        this.feedNavigationLinks = []


        this.courseName = title
        // this.initialCourseName = title



        let navLinks = links as any;


        navLinks.forEach(element => {

          if (element._attributes.rel === "http://opds-spec.org/facet") {
            this.feedNavigationLinks.push(element)
          }

        });


        this.ebookUrl = entries[0].link._attributes.href;
        this.audioBookUrl = entries[1].link._attributes.href;
        this.videoUrl = entries[2].link._attributes.href;


        this.makeBulkRequest()

      })


    }).catch(err => {
     
    })

  }

  seeAll(mediaType) {
    switch (mediaType) {
      case 'ebook':
        // console.log(this.ebookNavLinks)
        this.router.navigate(['/home/more'], {
          queryParams: {
            navLinks: JSON.stringify(this.ebookNavLinks),
            mediaType: "Popular Ebooks"
          }, relativeTo: this.activatedRoute
        })


        break;

      case 'audiobook':
        this.router.navigate(['/home/more'], {
          queryParams: {
            navLinks: JSON.stringify(this.audiobookNavLinks),
            mediaType: "Popular Audiobooks"
          }, relativeTo: this.activatedRoute
        })


        break;


      case 'video':
        this.router.navigate(['/home/more'], {
          queryParams: {
            navLinks: JSON.stringify(this.videosNavLinks),
            mediaType: "Popular Videos"
          }, relativeTo: this.activatedRoute
        })

        break;
    }
  }






}
