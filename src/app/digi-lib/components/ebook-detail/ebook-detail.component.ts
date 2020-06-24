import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook-detail',
  templateUrl: './ebook-detail.component.html',
  styleUrls: ['./ebook-detail.component.css']
})
export class EbookDetailComponent implements OnInit {
  ebook;

  constructor(private activeRoute:ActivatedRoute,private router:Router) { 

    this.activeRoute.queryParams.subscribe(params=>{
      this.ebook = JSON.parse(params.ebook)
    })

  }

  ngOnInit(): void {

  }

  loadEpub(){
    this.router.navigate(["/home/reader"],{queryParams: {resource:encodeURI(this.ebook.resource)} })
  }

}
