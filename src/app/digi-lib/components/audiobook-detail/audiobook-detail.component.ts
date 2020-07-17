import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-audiobook-detail',
  templateUrl: './audiobook-detail.component.html',
  styleUrls: ['./audiobook-detail.component.css','./audiobook-detail.component.scss']
})
export class AudiobookDetailComponent implements OnInit {
  audiobook;
  playlist;

  constructor(private activeroute:ActivatedRoute) { 
    this.activeroute.queryParams.subscribe(params=>{
        this.audiobook = JSON.parse(params.audiobook)
        this.playlist = JSON.parse(this.audiobook.playlist)

    })
  }

  ngOnInit(): void {
    $('#dialog').modal('show');
    $('.backLink').click(function(){
      parent.history.back();
      return false;
  });
  }

}
