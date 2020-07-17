import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-booking-facilities',
  templateUrl: './booking-facilities.component.html',
  styleUrls: ['./booking-facilities.component.css', '../../css/styles.css']
})
export class BookingFacilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
    $('.mobile-nav, .mobile-nav-toggle1, .mobile-nav-overly').hide();
    $("html").animate({ scrollTop: 0 }, "slow");
    $(".active").removeClass("active");

    $(".bf").addClass("active");
  }

}
