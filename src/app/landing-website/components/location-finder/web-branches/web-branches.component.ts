import { DataService } from './../../../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-web-branches',
  templateUrl: './web-branches.component.html',
  styleUrls: ['./web-branches.component.css', '../../../css/styles.css']
})
export class WebBranchesComponent implements OnInit {
  lat: number = 5.91841900;
  lng: number = 0.99035000;
  libraries;
  loader(){
    var pageLimit=15;
    for (var i = 1; i <= pageLimit; i++) {
      $('.e-file-loader').append('<div class="ph-item" style="padding:8px; margin-bottom:0px; border:none;"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-12" style="height:30px;"></div></div></div></div>');
  }
}
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService) {
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.data.getLibrariesLogOut(params.id).then(libraries => {
        // console.log(libraries)
        this.libraries = libraries;
        $('.e-file-loader').hide();
      })
    }).unsubscribe()


   
  }

  ngOnInit(): void {
    this.loader();
    $(".active").removeClass("active");
    $(".lf").addClass("active");
  }

  loadMap(library){
    this.router.navigate(["/web-home/Webmapviewer"],{queryParams:{lng:library.lng,lat:library.lat,name:library.name}})
    // console.log(library)
  }


}
