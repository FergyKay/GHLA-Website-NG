import { Injectable } from '@angular/core';
declare var $;


@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  showDialog(){
    setTimeout(()=>{
      $('#dialog').modal('show');
    },500)
  

  }

  hideDialog(){
    $('#dialog').modal('hide');
  }

  showLoader(){
    $('#loader').modal('show');

  }

  hideLoader(){
    $('#loader').modal('hide');
  }
}
