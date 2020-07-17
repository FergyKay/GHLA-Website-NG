import { Component, OnInit, NgZone} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../../services/data.service';
import { IsoLanguages } from 'src/app/helpers/iso-languages';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

declare var $;
// import {LocationFinderService} from '../../../../services/location-finder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../css/styles.css', '../../../digi-lib/components/digi-library-assets/css/wave.scss']
})
export class FirstPageComponent implements OnInit{
  data:any =[];
  article1:any =[];
  article2:any =[];
  article3:any =[];
  article4:any =[];



  isLoading = true;
  isLoadingFeed = true

  recentEbookUrl = "https://opds.ghanalibrary.org/recent/ebook.atom";
  recentEbooks = []
  recentEbooksNavLinks;
  recentEbookNavLinksLoaded: boolean;
  recentEbooksLoading: boolean = true

  popularEbookUrl = "https://opds.ghanalibrary.org/popular/ebook.atom";
  popularEbooks = []
  popularEbooksNavLinks;
  popularEbookNavLinksLoaded: boolean;
  popularEbooksLoading: boolean = true

  popularAudiobookUrl = "https://opds.ghanalibrary.org/popular/audio.atom";
  popularAudiobooks = []
  popularAudiobooksNavLinks;
  popularAudibooksLinksLoaded: boolean;
  popularAudiobooksLoading: boolean = true

  popularVideoUrl = "https://opds.ghanalibrary.org/popular/video.atom";
  popularVideos = []
  popularVideossNavLinks;
  popularVideosLinksLoaded: boolean;
  popularVideosLoading: boolean = true



  target = []
  colorArry = [
    { from: "#23733a", to: '#2d4b41' },
    { from: "#29a18f", to: '#1c2f29' },
    { from: "#00cefc", to: '#0046f1' },
    { from: "#fc9400", to: '#be6f32' },
    { from: "#853e88", to: '#372b47' }
  ]

  userName;
  timeOfDay;
  queryTerms = ""
  isoLanguages: any = new IsoLanguages()
  audiobookNavLinks: any;
  videosNavLinks: any;
    
  loader(){
    var pageLimit=15;
    for (var i = 1; i <= pageLimit; i++) {
      $('.e-file-loader').append('<td style="padding:0px;"><div class="ph-item" style="background:none; width:200px; padding:0px; border:none;"> <div class="ph-col-12" > <div class="ph-picture" style="height:240px;"></div></div></div></td>');
      // $('.e-file-loader').append('<div class="col-md-2 "><div class="ph-item" style=" background:none;"> <div class="ph-col-12" > <div class="ph-picture" style="height:230px;"></div></div></div></div>');
  }
}
  
  constructor(private http: HttpClient,private ngZone: NgZone, private dataService: DataService, private router: Router, private storage: StorageService, private activatedRoute: ActivatedRoute) {    
    
  }

  ngOnInit(): void{
    $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
    $('.mobile-nav, .mobile-nav-toggle1, .mobile-nav-overly').hide();
    this.loader()
    this.getRecentEbooks()
    
    $('.horizon-prev').click(function() {
      $('#content').animate({
        scrollLeft: "-=198px"
      }, "slow");
    });
    
    $('.horizon-next').click(function() {
      $('#content').animate({
        scrollLeft: "+=198px"
      }, "slow");
    });


    $('.horizon-prev-ebook').click(function() {
      $('#content-ebook').animate({
        scrollLeft: "-=198px"
      }, "slow");
    });
    
    $('.horizon-next-ebook').click(function() {
      $('#content-ebook').animate({
        scrollLeft: "+=198px"
      }, "slow");
    });

    $('.horizon-prev-audio').click(function() {
      $('#content-audio').animate({
        scrollLeft: "-=198px"
      }, "slow");
    });
    
    $('.horizon-next-audio').click(function() {
      $('#content-audio').animate({
        scrollLeft: "+=198px"
      }, "slow");
    });

    $('.horizon-prev-video').click(function() {
      $('#content-video').animate({
        scrollLeft: "-=198px"
      }, "slow");
    });
    
    $('.horizon-next-video').click(function() {
      $('#content-video').animate({
        scrollLeft: "+=198px"
      }, "slow");
    });

    
    

    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
   

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
   
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

    $(".menui").removeClass("active");
    $(".home").addClass("active");
    this.http.get('../ghlaapi/read.php').subscribe(data => {
      // this.data.push(data);
      console.log(this.data);
      this.article1 = data[0];
      this.article2 = data[1];
      this.article3 = data[2];
      this.article4 = data[3];
      //http://localhost/GHLA-WEB-PROPER/src/app/landing-website/components/ghlaapi/read.php
              
        }, error => console.error(error));


        $(".btn-recent").click(function(){
          $(".showcase").hide();
          setTimeout(function(){
            $(".recent").fadeIn();
          },200)
        });


        $(".btn-ebook").click(function(){
          $(".showcase").hide();
          setTimeout(function(){
            $(".ebooks").fadeIn();
          },200)
        });

        $(".btn-eaudio").click(function(){
          $(".showcase").hide();
          setTimeout(function(){
            $(".eaudio").fadeIn();
          },200)
        });

        $(".btn-evideo").click(function(){
          $(".showcase").hide();
          setTimeout(function(){
            $(".evideo").fadeIn();
          },200)
        });
  }


  email:any;
  response:any;  
  pageheader:any;
  hold:any[];
    

  
  getRecentEbooks() {
    this.dataService.pullFromFeed(this.recentEbookUrl).then(res => {
      this.dataService.getFeedNavLinks().then(navLinks => {
        this.recentEbooksNavLinks = navLinks
        
      })

      let ebk = res as any;


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
              language: this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)
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
              language: this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)
            }
          }






          this.recentEbookNavLinksLoaded = true
          this.recentEbooks.push(book)
        
          this.recentEbooksLoading = false
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
              language: this.isoLanguages.getLanguageNameFromCode(ebk['dcterms:language']._text)

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
              language: this.isoLanguages.getLanguageNameFromCode(ebk['dcterms:language']._text)

            }
          }


          // url = url.replace(/^http:\/\//i, 'https://');


          this.recentEbookNavLinksLoaded = true
          this.recentEbooks.push(book)
          this.recentEbooksLoading = false

        } catch (error) {
          this.recentEbooksLoading = false
          this.recentEbooks = []
          this.recentEbookNavLinksLoaded = false
        }



      }

    }).then(m => {
     
      // console.log(this.recentEbooks)
      this.getPopularEbooks()
      $('.e-file-loader0').hide();
    })
  }


  getPopularEbooks() {

    this.dataService.pullFromFeed(this.popularEbookUrl).then(res => {
      this.dataService.getFeedNavLinks().then(navLinks => {
        this.popularEbooksNavLinks = navLinks
      })

      let ebk = res as any;


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
              language: this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)
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
              language: this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)

            }
          }






          this.popularEbookNavLinksLoaded = true
          this.popularEbooks.push(book)
          this.popularEbooksLoading = false
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
              language: this.isoLanguages.getLanguageNameFromCode(ebk['dcterms:language']._text)

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
              language: this.isoLanguages.getLanguageNameFromCode(ebk['dcterms:language']._text)

            }
          }


          // url = url.replace(/^http:\/\//i, 'https://');


          this.popularEbookNavLinksLoaded = true
          this.popularEbooks.push(book)
          this.popularEbooksLoading = false

        } catch (error) {
          this.popularEbooksLoading = false
          this.popularEbooks = []
          this.popularEbookNavLinksLoaded = false
        }



      }

    }).then(m => {
      // console.log(this.popularEbooks)
      this.getPopularAudiobooks()
      $('.e-file-loader1').hide();
    })
  }
   

  getPopularAudiobooks() {
    this.dataService.pullFromFeed(this.popularAudiobookUrl).then(res => {
      this.dataService.getFeedNavLinks().then(navLinks => {
        this.popularAudiobooksNavLinks = navLinks
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
              playlist: JSON.stringify(playlist),
              publisher: bk['dcterms:publisher']._text,
              language: this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)

            }
          } catch (error) {
            adbk = {
              title: bk.title._text,
              id: bk.id._text,
              author: this.getAuthor(bk.author),
              summary: "No Description Available",
              cover: coverUrl,
              playlist: JSON.stringify(playlist),
              publisher: bk['dcterms:publisher']._text,
              language: this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)


            }
          }



          this.popularAudiobooks.push(adbk)
          this.popularAudiobooksLoading = false
          this.popularAudibooksLinksLoaded = true


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
            playlist: JSON.stringify(playlist),
            publisher: audibk['dcterms:publisher']._text,
            language: this.isoLanguages.getLanguageNameFromCode(audibk['dcterms:language']._text)


          }

          this.popularAudiobooks.push(adbk)
          this.popularAudiobooksLoading = false
          this.popularAudibooksLinksLoaded = true

        } catch (error) {
          this.popularAudiobooksLoading = false
          this.popularAudiobooks = []
          this.popularAudibooksLinksLoaded = false
        }
      }


      // console.log(this.popularAudiobooks)
    }).then(m => {
      // console.log(this.popularAudiobooks)
      this.getPopularVideos()
      $('.e-file-loader2').hide();
    })
  }

  getPopularVideos() {
    this.dataService.pullFromFeed(this.popularVideoUrl).then(res => {
      this.dataService.getFeedNavLinks().then(navLinks => {
        this.popularVideossNavLinks = navLinks
      })

      let video = res as any;


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
            playlist: JSON.stringify(playlist),
            publisher: bk['dcterms:publisher']._text,
            language: this.isoLanguages.getLanguageNameFromCode(bk['dcterms:language']._text)



          }



          this.popularVideosLinksLoaded = true
          this.popularVideos.push(vd)
          this.popularVideosLoading = false


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
            playlist: JSON.stringify(playlist),
            publisher: video['dcterms:publisher']._text,
            language: this.isoLanguages.getLanguageNameFromCode(video['dcterms:language']._text)


          }

          // console.log(vd)



          this.popularVideosLinksLoaded = true
          this.popularVideos.push(vd)
          this.popularVideosLoading = false


        } catch (error) {
          // console.log(error)
          this.popularVideosLinksLoaded = false
          this.popularVideos = []
          this.popularVideosLoading = false
        }


      }



    }).then(m => {
      console.log(this.popularVideos)
      
      $('.e-file-loader3').hide();
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

  seeAllRecentEbooks() {
    this.router.navigate(['/home/more'], {
      queryParams: {
        navLinks: JSON.stringify(this.recentEbooksNavLinks),
        mediaType: "Recently Added"
      }
    })
  }

  seeAll(mediaType) {
    switch (mediaType) {
      case 'ebook':
        // console.log(this.ebookNavLinks)
        this.router.navigate(['/home/more'], {
          queryParams: {
            navLinks: JSON.stringify(this.popularEbooksNavLinks),
            mediaType: "Popular Ebooks"
          }, relativeTo: this.activatedRoute
        })


        break;

      case 'audiobook':
        this.router.navigate(['/home/more'], {
          queryParams: {
            navLinks: JSON.stringify(this.popularAudiobooksNavLinks),
            mediaType: "Popular Audiobooks"
          }, relativeTo: this.activatedRoute
        })


        break;


      case 'video':
        this.router.navigate(['/home/more'], {
          queryParams: {
            navLinks: JSON.stringify(this.popularVideossNavLinks),
            mediaType: "Popular Videos"
          }, relativeTo: this.activatedRoute
        })

        break;
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
  seeMore(){

  }



  viewArticleId(id){
    this.router.navigate(["/web-home/Readnews"],{queryParams:{id:id}})
  }
}
