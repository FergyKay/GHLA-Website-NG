import { DataService } from './../../../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css', '../../digi-library-assets/css/style.css']
})
export class BranchesComponent implements OnInit {
  libraries;


  loader(){
    var pageLimit=7;
    for (var i = 1; i <= pageLimit; i++) {
      $('.e-file-loader').append('<div class="ph-item" style="padding:8px; margin-bottom:0px; border:none;"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-12" style="height:60px;"></div></div></div></div>');
  }
}
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.data.getLibrariesProtected(params.id).then(libraries => {
        // console.log(libraries)
        this.libraries = libraries
        $('.e-file-loader').hide();
      })
    }).unsubscribe()
  }

  ngOnInit(): void {
   this.loader();
  }

  loadMap(library){
    this.router.navigate(["/home/Mapviewer"],{queryParams:{lng:library.lng,lat:library.lat,name:library.name}})
    // console.log(library)
  }

}
