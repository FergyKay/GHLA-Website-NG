import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css', '../../css/styles.css']
})
export class Erro404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("html").animate({ scrollTop: 0 }, "slow");
    $(".active").removeClass("active");
  }

}
