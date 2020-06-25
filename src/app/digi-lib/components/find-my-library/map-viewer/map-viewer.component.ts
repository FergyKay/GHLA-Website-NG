import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {LocationFinderService} from '../../../../services/location-finder.service';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css', '../../digi-library-assets/css/style.css']
})
export class MapViewerComponent implements OnInit {
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
