import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css', '../digi-library-assets/css/style.css']
})
export class CourseSelectionComponent implements OnInit {
  subjects = []

  constructor(private activeRoute:ActivatedRoute,private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {


    //i guess it's meaningful
    "use strict";
  
    var fullHeight = function() {
  
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
  
    };
    fullHeight();
  
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });




    this.activeRoute.queryParams.subscribe(params=>{
      // console.log(params.url)
      // this.subjects = []
      this.dataservice.pullFromFeed(decodeURI(params.url)).then(entries=>{
        this.subjects = entries as any
      })



    })



  }


  loadContent(subject){
   
    this.router.navigate(["/home/content"],{queryParams:{meta:JSON.stringify(subject)}})
    // this.dataservice.pullFromFeed(subject.link._attributes.href).then(entries=>{
    //   console.log(entries)
    // })
  }
  

}
