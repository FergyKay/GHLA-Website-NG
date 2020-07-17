import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-read-news',
  templateUrl: './read-news.component.html',
  styleUrls: ['./read-news.component.css', '../../../css/styles.css']
})
export class ReadNewsComponent implements OnInit {
  articleid:any;
  singlenews:any =[];  
  allnews1:any = [];
  allnews2:any = [];
  allnews3:any = [];
  allnewdata:any=[];
  pageheader:any;
  hold:any[];
    
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    
  }

  ngOnInit(): void{
    $(".active").removeClass("active");
    $(".events").addClass("active");
    $("html").animate({ scrollTop: 0 }, "slow");
    this.route.queryParams.subscribe(params => {
      this.articleid = params['id'];    
      // console.log(this.articleid);
    })
    
    this.http.get('../ghlaapi/readart.php?id='+this.articleid).subscribe(response => {
      this.singlenews = response;  
      console.log(this.singlenews);
      if(this.singlenews.type == "News"){
        this.pageheader = "News";
      }else{
        this.pageheader = "About";
      }    
    },error => console.error(error));

    // http://localhost/GHLA-WEBSITE-NG/src/app/landing-website/components/ghlaapi/readart.php
    // http://localhost/GHLA-WEBSITE-NG/src/app/landing-website/components/ghlaapi/allnews.php    

    this.http.get('../../ghlaapi/allnews.php').subscribe(response => {
      this.allnews1 = response[0];
      this.allnews2 = response[1];
      this.allnews3 = response[2];
      // this.hold = this.allnews[0];
      //console.log(this.allnews1);       
    },error => console.error(error));
      
  }

}
