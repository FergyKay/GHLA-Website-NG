import { Component, OnInit } from '@angular/core';
declare var $

@Component({
  selector: 'app-blog',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css', '../../css/styles.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
    $('.mobile-nav, .mobile-nav-toggle1, .mobile-nav-overly').hide();
    $("html").animate({ scrollTop: 0 }, "slow");
    $(".active").removeClass("active");
    $(".ab").addClass("active");
    

    $("#about").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('About Us');
      setTimeout(function(){
        $(".about").fadeIn('slow');
      },1000)
    });

    $("#history").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('History & Vision');
      setTimeout(function(){
        $(".history").fadeIn('slow');
      },1000)
    });


    $("#services").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Services');
      setTimeout(function(){
        $(".services").fadeIn('slow');
      },1000)
    });


    $("#donation").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Make a Donation');
      setTimeout(function(){
        $(".donation").fadeIn('slow');
      },1000)
    });

    $("#partnership").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Corporate Partnership');
      setTimeout(function(){
        $(".partnership").fadeIn('slow');
      },1000)
    });


    $("#foundations").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Foundations, Trust and Philanthropic Support');
      setTimeout(function(){
        $(".foundations").fadeIn('slow');
      },1000)
    });


    $("#adopt").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Adopt a Library');
      setTimeout(function(){
        $(".adopt").fadeIn('slow');
      },1000)
    });


    $("#coalition").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Coalition of NGOs in Library Development');
      setTimeout(function(){
        $(".coalition").fadeIn('slow');
      },1000)
    });

    $("#patronage").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Become a Patron of Ghana Library');
      setTimeout(function(){
        $(".patronage").fadeIn('slow');
      },1000)
    });

    $("#membership").click(function(){
      $(".menuItem").fadeOut('slow');
      $(".text").html('Become a Member');
      setTimeout(function(){
        $(".membership").fadeIn('slow');
      },1000)
    });




  }

}
