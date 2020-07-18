import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  entries = []
  start=""
  self=""
  next=""
  previous=""



  navLinks;

  constructor(private activatedRoute: ActivatedRoute,private data:DataService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
    
      this.navLinks = JSON.parse(params.params).link

      this.navLinks.forEach(element => {
        switch (element._attributes.rel) {
          case "self":
            this.self = decodeURI(element._attributes.href)
            break;

  
          case "next":
            this.next = decodeURI( element._attributes.href)
            break;
  
          case "previous":
            this.previous = decodeURI(element._attributes.href)
            break;
        }
  
      });

      
  
      let entry = JSON.parse(params.params).entry;

      try {
       
        entry.forEach(entry => {
          this.entries.push(entry)
        });
      } catch (error) {
       
        this.entries.push(entry)
      }


      // this.entries = JSON.parse(params.params).entry

    }).unsubscribe()
  }

  nextPage(){
    // this.loader.show()
    this.data.searchNavigation(this.next).then(res=>{
      // this.loader.hide()
      this.reparseEntries(res)
    })
  }

  prevPage(){
    // this.loader.show()
    this.data.searchNavigation(this.previous).then(res=>{
      // this.loader.hide()
      this.reparseEntries(res)
    })
  }

  backToTop(){
    // this.loader.show()
    this.data.searchNavigation(this.self).then(res=>{
      // this.loader.hide()
      this.reparseEntries(res)
    })
  }

  reparseEntries(params){
    this.next=""
    this.previous=""
    this.navLinks = params.link

    this.entries.length = 0
   
    this.navLinks.forEach(element => {
      switch (element._attributes.rel) {
      

        case "next":
          this.next = decodeURI( element._attributes.href)
          break;

        case "previous":
          this.previous = decodeURI(element._attributes.href)
          break;
      }

    });

    try {
      // console.log(params.entry)
      params.entry.forEach(entry => {
        this.entries.push(entry)
      });
    } catch (error) {
      // console.log(error)
      this.entries.push(params.entry)
    }

  
  }

  backToPrevious(){
    // this.router.back()
  }



}
