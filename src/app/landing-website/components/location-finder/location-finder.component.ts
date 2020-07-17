import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $;


@Component({
  selector: 'app-location-finder',
  templateUrl: './location-finder.component.html',
  styleUrls: ['./location-finder.component.css', '../../css/styles.css']
})
export class LocationfinderComponent implements OnInit {
  lat: number = 5.91841900;
  lng: number = 0.99035000;
  libraries;
  regions;

  loader(){
    var pageLimit=15;
    for (var i = 1; i <= pageLimit; i++) {
      $('.e-file-loader').append('<div class="ph-item" style="padding:8px; margin-bottom:0px; border:none;"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-12" style="height:30px;"></div></div></div></div>');
  }
}
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService) {
    $(".active").removeClass("active");
   }

  ngOnInit(): void {
    this.loader();
    $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
    $('.mobile-nav, .mobile-nav-toggle1, .mobile-nav-overly').hide();
    $("html").animate({ scrollTop: 0 }, "slow");
    this.data.getRegionsLogOut().then(regions=>{
     this.regions = regions
     $('.e-file-loader').hide();
    })
  }

  loadLibrariesForRegionWithId(id){
    this.router.navigate(["/web-home/Webbranches"],{queryParams:{id:id}})
    // this.data.getLibrariesProtected(id).then(libraries=>{
    //   console.log(libraries)

    // })
}





}
