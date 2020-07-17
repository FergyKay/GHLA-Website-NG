import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-map-viewer',
  templateUrl: './web-map-viewer.component.html',
  styleUrls: ['./web-map-viewer.component.css', '../../../css/styles.css']
})
export class WebMapViewerComponent implements OnInit {
  lat: number = 5.91841900;
  lng: number = 0.99035000;
  zoom = 20
  name;;

  constructor(private activeRoute:ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe(params=>{
      this.lat = parseFloat(params.lat);
      this.lng = parseFloat(params.lng)
      this.name = params.name
    }).unsubscribe()
  }

  ngOnInit(): void {
  }

}
