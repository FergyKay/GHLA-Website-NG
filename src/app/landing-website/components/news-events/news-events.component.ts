import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css', '../../css/styles.css']
})
export class NewsEventsComponent implements OnInit {
  articleid:any;
  singlenews:any =[];  
  allnews1:any = [];
  allnews2:any = [];
  allnews3:any = [];
  allnewdata:any=[];
  pageheader:any;
  hold:any[];

  loader(){
    var pageLimit=12;
    for (var i = 1; i <= pageLimit; i++) {
      $('.e-file-loader').append('<div class="col-xs-12 col-sm-6"><div class="ph-item" style="background:none; width:559px; padding:0px; border:none;"> <div class="ph-col-12" > <div class="ph-picture" style="height:240px;"></div></div></div></div>');
      // $('.e-file-loader').append('<div class="col-md-2 "><div class="ph-item" style=" background:none;"> <div class="ph-col-12" > <div class="ph-picture" style="height:230px;"></div></div></div></div>');
  }
}
    
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    $(".active").removeClass("active");
  }


  ngOnInit(): void{
    this.loader()
    $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
    $('.mobile-nav, .mobile-nav-toggle1, .mobile-nav-overly').hide();
    $("html").animate({ scrollTop: 0 }, "slow");
    this.http.get('../ghlaapi/allnews.php').subscribe(response => {
      this.allnews1 = response;
      this.allnews2 = response[1];
      this.allnews3 = response[2];
      // this.hold = this.allnews[0];
      console.log(this.allnews1);   
      $('.e-file-loader').hide();    
    },error => console.error(error));
      
  }

  // http://localhost/GHLA-Web-NG-Orig/src/app/landing-website/components/ghlaapi/allnews.php
  
  viewArticleId(id){
    this.router.navigate(["/web-home/Readnews"],{queryParams:{id:id}})
  }


 
}
