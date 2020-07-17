import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
declare var $;


@Component({
  selector: 'web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.css', '../css/styles.css']
})
export class WebHomeComponent implements OnInit {
  response:any;
  email:any;
  newsletterSubscribe: FormGroup;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private fb: FormBuilder,private auth:AuthenticationService,) {
     }

    

  ngOnInit(): void {
    this.newsletterSubscribe = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      
    });

    if ($('.nav-menu').length) {
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('.body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').show();
        $('.mobile-nav').show();
        $('.mobile-nav-toggle1').show();
      });

      $(document).on('click', '.mobile-nav-toggle1', function(e) {
        $(".mobile-nav, .mobile-nav-toggle1").hide();
        $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
        $('.mobile-nav-overly').fadeOut();

      });

      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });



    }

    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
     });

  }

  sendSubscribeEmail(data) {
    return this.http.post('http://localhost/GHLA-WEB-PROPER/src/app/landing-website/components/ghlaapi/subscription.php', data).pipe( map(response => {
      return response;
    }));
  }

  newsletterSubscription(value){
    const subscription = new FormData();
    subscription.append('email', value.email);
    this.sendSubscribeEmail(subscription).subscribe(result => {
      // this.router.navigate(['']);
      $('.alert-success').show();
      setTimeout(function(){ 
        $('.alert-success').fadeOut();
      },5000);
    })
  }

  // newsletterSubscription(){
  //   var test = { email: "torsuichard@gmail.com" }
  //   this.http.post<any>('http://localhost/GHLA-WEB-PROPER/src/app/landing-website/components/ghlaapi/subscription.php', test).subscribe(response => {
  //     this.response = response;
  //     // console.log(this.articleread);
  //     if(this.response.status == 201){
  //       console.log("Subscription successful");
  //     }else{
  //       console.log("Error")
  //     }
  //   },error => console.error(error));
  // }





}
