import { UiService } from './../../../../services/ui.service';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-replace-password',
  templateUrl: './replace-password.component.html',
  styleUrls: ['./replace-password.component.css']
})
export class ReplacePasswordComponent implements OnInit {

  message;

  resetPasswordForm = new FormGroup({
      token:new FormControl('',Validators.required),
      password1:new FormControl('',Validators.required),
      password2:new FormControl('',Validators.required) 
  })

  constructor(private auth: AuthenticationService,private router:Router,private ui:UiService) {
    
   }

  ngOnInit(): void {
    this.resetPasswordForm.controls['token'].patchValue(this.auth.getVerificationCode())
    // console.log(this.auth.getVerificationCode())
  }

  resetPassword(){
    this.ui.showLoader()
    this.auth.resetPassword(this.resetPasswordForm.value).then(res=>{


      if((res as any).status === 206){

        this.ui.hideLoader()
        let message = (res as any).message
        let error = (res as any).errors

        this.message = message+"\n"+error;
        this.ui.showDialog()
      }else{
        this.message = "Password reset successful";
          this.auth.setVerificationCode(null)
          this.ui.hideLoader()
          this.ui.showDialog()

          setTimeout(()=>{
            this.ui.hideDialog()
            this.router.navigate(['signin'])
          },5000)
          
      }
      
    },rej=>{
      this.ui.hideLoader()
      let message = (rej as any).error.errors
      let error = (rej as any).error.message

      this.message = message+"\n"+error;
      this.ui.showDialog()

    })
  }

}
