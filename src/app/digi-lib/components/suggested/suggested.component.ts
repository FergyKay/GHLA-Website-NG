import { element } from 'protractor';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css', '../digi-library-assets/css/style.css']
})
export class SuggestedComponent implements OnInit {

  vendors = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getVendors().then(vendrs =>{

      let v: [] = (vendrs as any).data

       v.forEach(element => {
          if((element as any).vendor_feed_type !== "OPDS"){
         
              this.vendors.push(element)
          }
      });


    })
  }

  openVendorUrl(url){
    window.open(url,"_blank")
  }

}
