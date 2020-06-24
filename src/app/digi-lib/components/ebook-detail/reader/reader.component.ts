import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularEpubViewerComponent } from 'angular-epub-viewer';

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


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.resourceUrl = params.resource




    })
  }

  ngOnInit(): void {


  }

  ngAfterViewInit() {

    fetch(this.resourceUrl).then(r => {

    r.blob().then(file=>{
      
      this.epubViewer.openFile(<File>file)

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
