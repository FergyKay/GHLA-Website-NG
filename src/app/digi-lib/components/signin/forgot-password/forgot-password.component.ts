import { UiService } from './../../../../services/ui.service';
import { AuthenticationService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  message;

  usernameForm = new FormGroup({
    username: new FormControl('', [Validators.required])
  })
  constructor(private router:Router,private authService: AuthenticationService, private uiService: UiService) { }

  ngOnInit(): void {

  }

  requestToken() {
    this.uiService.showLoader()
    this.authService.requestPasswordReset(this.usernameForm.controls['username'].value).then(res => {
      this.uiService.hideLoader()
      
      this.router.navigate(['Verification'],{queryParams: {id:this.usernameForm.controls['username'].value}})

    }, rej => {
      this.uiService.hideLoader()
      this.message = rej.error.message
      this.uiService.showDialog()
    })
  }


}
