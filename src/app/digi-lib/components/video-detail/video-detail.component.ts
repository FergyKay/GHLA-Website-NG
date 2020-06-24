import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  video;
  videoSrc;

  constructor(private activeroute:ActivatedRoute) { 
    this.activeroute.queryParams.subscribe(params=>{
        this.video = JSON.parse(params.video)
    })
  }

  ngOnInit(): void {
    this.videoSrc = this.video.playlist[0].url
  }

}
