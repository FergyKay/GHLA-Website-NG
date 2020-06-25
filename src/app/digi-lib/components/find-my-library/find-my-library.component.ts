import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-my-library',
  templateUrl: './find-my-library.component.html',
  styleUrls: ['./find-my-library.component.css', '../digi-library-assets/css/style.css']
})
export class FindMyLibraryComponent implements OnInit {
  regions;

  constructor(private data:DataService,private router:Router) {

   }

  ngOnInit(): void {
    this.data.getRegions().then(regions=>{
     this.regions = regions
    })
  }

  loadLibrariesForRegionWithId(id){
    this.router.navigate(["/home/Branches"],{queryParams:{id:id}})
    // this.data.getLibrariesProtected(id).then(libraries=>{
    //   console.log(libraries)

    // })
  }

}
