import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-digi-library',
  templateUrl: './digi-library.component.html',
  styleUrls: ['./digi-library.component.css', '../digi-library-assets/css/style.css']
})
export class DigiLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   


    "use strict";
  
    var fullHeight = function() {
  
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
  
    };
    fullHeight();
  
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
  }

}
