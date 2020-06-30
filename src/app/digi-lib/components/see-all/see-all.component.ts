import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css','../digi-library-assets/css/style.css']
})
export class SeeAllComponent implements OnInit {

  navLinks
  self = ""
  next = ""
  previous = ""

  entries = []

  mediaType

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
   
    this.activatedRoute.queryParams.subscribe(params => {
      try {
        this.navLinks = JSON.parse((<any>params).navLinks)
        this.mediaType = (<any>params).mediaType

       

        this.navLinks.forEach(element => {
          switch (element._attributes.rel) {
            case "self":
              this.self = decodeURI(element._attributes.href)
              break;


            case "next":
              this.next = decodeURI(element._attributes.href)
              break;

            case "previous":
              this.previous = decodeURI(element._attributes.href)
              break;
          }
        });

          // console.log(this.self)
          this.data.searchNavigation(this.self).then(res => {
         
            // console.log(res)
             this.reparseEntries(res)
          })


     
      } catch (error) {
        console.log(error)
      }

    }).unsubscribe()
  }


  backToPrevious() {
    // this.router.back()
  }

  nextPage() {
    // this.loader.show()
    this.data.searchNavigation(this.next).then(res => {
      // this.loader.hide()
      this.reparseEntries(res)
    })
  }

  prevPage() {
    // this.loader.show()
    this.data.searchNavigation(this.previous).then(res => {
      // this.loader.hide()
      this.reparseEntries(res)
    })
  }

  backToTop() {
    // this.loader.show()
    this.data.searchNavigation(this.self).then(res => {
      // this.loader.hide()
      this.reparseEntries(res)
    })
  }

  reparseEntries(params) {
    this.next = ""
    this.previous = ""
    this.navLinks = params.link

    this.entries.length = 0

    this.navLinks.forEach(element => {
      switch (element._attributes.rel) {
        case "next":
          this.next = decodeURI(element._attributes.href)
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
       console.log(error)
      this.entries.push(params.entry)
      // console.log(this.entries)
    }
   
  
  }


}
