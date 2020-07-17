import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularEpubViewerComponent } from 'angular-epub-viewer';
declare var $;
import * as FileSaver from 'node_modules/file-saver'

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  @ViewChild('epubViewer')
  epubViewer: AngularEpubViewerComponent;


  resourceUrl;

//   loader(){
//     $('#dialog').modal('show');
//       $('.e-file-loader').append('<div class="col-md-12 " style="padding:0px;"><div class="ph-item" style=" background:none; width:1500px; padding:0px; border:none;"> <div class="ph-col-12" > <div class="ph-picture" style="height:730px;"></div></div></div></div>');
 
// }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.resourceUrl = params.resource


     

    })
  }

  ngOnInit(): void {
    $('.backLink').click(function(){
      parent.history.back();
      return false;
  });
//  this.loader();

  }

  ngAfterViewInit() {

    fetch(this.resourceUrl).then(r => {

    r.blob().then(file=>{
      
      this.epubViewer.openFile(<File>file)
      $('.fa-spinner').hide();
    })

      // file.lastModifiedDate = new Date();
      // file.name = Date.now() + ".epub";


      // this.epubViewer.openFile(<File>file)
    });

    // this.epubViewer.setStyle("font-size","40")
    // FileSaver.saveAs(this.resourceUrl,  (Date.now())+".epub");
    // this.epubViewer.openFile('http://www.feedbooks.com/book/22.epub')
  }

}
