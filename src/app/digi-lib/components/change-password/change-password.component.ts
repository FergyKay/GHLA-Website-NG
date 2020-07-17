import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { UiService } from './../../../services/ui.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css', '../digi-library-assets/css/style.css']
})
export class ChangePasswordComponent implements OnInit {
  message;

  updatePasswordForm = new FormGroup({
    current: new FormControl('', Validators.required),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  })

  constructor(private ui: UiService,private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    
  }

  updatePassword() {
    this.ui.showLoader()
    this.authService.updatePassword(this.updatePasswordForm.value).then(res=>{
      if((res as any).status === 206){

        this.ui.hideLoader()
        let message = (res as any).message
        let error = (res as any).errors

        this.message = message+"\n"+error;
        this.ui.showDialog()
      }else{
        this.message = "Password update successful";
          this.authService.setVerificationCode(null)
          this.ui.hideLoader()
          this.ui.showDialog()

          setTimeout(()=>{
            this.ui.hideDialog()
            this.router.navigate(['/home/discover'])
          },2000)
          
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
