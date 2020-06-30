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

  playlist;

  constructor(private activeroute:ActivatedRoute) { 
    this.activeroute.queryParams.subscribe(params=>{
        this.video = JSON.parse(params.video)

        this.playlist = JSON.parse(this.video.playlist)
    })
  }

  ngOnInit(): void {
    this.videoSrc = this.playlist[0].url
  }

}
