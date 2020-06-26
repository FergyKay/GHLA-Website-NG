import { AuthenticationService } from './../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cpuUsage } from 'process';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],


})





export class SigninComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])

  })


  constructor(private router: Router, private authService: AuthenticationService) { 
    
  }

  home() {
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {


  }

  navigateTo(route) {
    this.router.navigate([route])
  }

  login() {

    this.authService.login(this.loginForm.value).then(response => {
      localStorage.setItem("grant", (response as any).grant),
        localStorage.setItem("renew", (response as any).renew)
        window.location.reload()
    }, reject => {
      alert(JSON.stringify(reject))
    })
    // console.log(this.loginForm.value)
  }



}

