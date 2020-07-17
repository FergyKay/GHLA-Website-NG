import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
declare var $;

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
  
  loader(){
    var pageLimit=15;
    for (var i = 1; i <= pageLimit; i++) {
      $('.e-file-loader').append('<div class="col-md-2 " style="padding:0px;"><div class="ph-item" style=" background:none; width:200px; padding:0px; border:none;"> <div class="ph-col-12" > <div class="ph-picture" style="height:230px;"></div></div></div></div>');
  }
}

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    $('#dialog').modal('hide');
   this.loader();
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
      $('.e-file-loader').hide();
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
