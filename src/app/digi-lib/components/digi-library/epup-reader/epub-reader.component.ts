import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-epub-reader',
  templateUrl: './epub-reader.component.html',
  styleUrls: ['./epub-reader.component.css']
})
export class EpubReaderComponent implements OnInit {

  @ViewChild("area", { static: true }) area: ElementRef

  constructor() { }

  ngOnInit(): void {
    
  }

}
