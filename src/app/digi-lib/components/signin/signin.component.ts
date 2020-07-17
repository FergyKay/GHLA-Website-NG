import { UiService } from './../../../services/ui.service';
import { AuthenticationService } from './../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cpuUsage } from 'process';
declare var $;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],


})





export class SigninComponent implements OnInit {
  isSubmittingForm = false;
  isErrorForm;
  errorMessage;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])

  })


  constructor(private router: Router, private authService: AuthenticationService,private uiService:UiService) { 
    
  }

  home() {
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {

  

    $('#eye').click(function(){
       
      if($(this).hasClass('fa-eye-slash')){
         
        $(this).removeClass('fa-eye-slash');
        
        $(this).addClass('fa-eye');
        
        $('#password').attr('type','text');
          
      }else{
       
        $(this).removeClass('fa-eye');
        
        $(this).addClass('fa-eye-slash');  
        
        $('#password').attr('type','password');
      }
  });

  }


  navigateTo(route) {
    this.router.navigate([route])
  }

  login() {
    this.uiService.showLoader()
    this.authService.login(this.loginForm.value).then(response => {
      localStorage.setItem("grant", (response as any).grant),
        localStorage.setItem("renew", (response as any).renew)
        this.authService.getProfile().then(res=>{
          window.location.reload()
        })
    }, reject => {
      this.uiService.hideLoader()

     
        this.uiService.showDialog()

        this.errorMessage = reject.error.message
      // alert(JSON.stringify(reject.statusText))
    })
    // console.log(this.loginForm.value)
  }



}

