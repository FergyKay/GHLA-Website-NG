import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-find-my-library',
  templateUrl: './find-my-library.component.html',
  styleUrls: ['./find-my-library.component.css', '../digi-library-assets/css/style.css']
})
export class FindMyLibraryComponent implements OnInit {
  regions;
  http: any;

  loader(){
    var pageLimit=15;
    for (var i = 1; i <= pageLimit; i++) {
      $('.e-file-loader').append('<div class="ph-item" style="padding:8px; margin-bottom:0px; border:none;"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-12" style="height:30px;"></div></div></div></div>');
  }
}

  constructor(private data:DataService,private router:Router) {

   }

  ngOnInit(): void {
    this.loader();
    this.data.getRegions().then(regions=>{
     this.regions = regions
     $('.e-file-loader').hide();
    })
  }


  loadLibrariesForRegionWithId(id){
    this.router.navigate(["/home/Branches"],{queryParams:{id:id}})
    // this.data.getLibrariesProtected(id).then(libraries=>{
    //   console.log(libraries)

    // })
  }

}
