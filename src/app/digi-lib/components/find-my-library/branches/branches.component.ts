import { DataService } from './../../../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css', '../../digi-library-assets/css/style.css']
})
export class BranchesComponent implements OnInit {
  libraries;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.data.getLibrariesProtected(params.id).then(libraries => {
        // console.log(libraries)
        this.libraries = libraries
      })
    }).unsubscribe()
  }

  ngOnInit(): void {

  }

  loadMap(library){
    this.router.navigate(["/home/Mapviewer"],{queryParams:{lng:library.lng,lat:library.lat,name:library.name}})
    // console.log(library)
  }

}
