import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiobook-detail',
  templateUrl: './audiobook-detail.component.html',
  styleUrls: ['./audiobook-detail.component.css']
})
export class AudiobookDetailComponent implements OnInit {
  audiobook;

  constructor(private activeroute:ActivatedRoute) { 
    this.activeroute.queryParams.subscribe(params=>{
        this.audiobook = JSON.parse(params.audiobook)
    })
  }

  ngOnInit(): void {
  }

}
