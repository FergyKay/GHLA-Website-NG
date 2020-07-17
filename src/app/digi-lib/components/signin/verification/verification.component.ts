import { UiService } from './../../../../services/ui.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  message;

  verification = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]),
    username: new FormControl('', Validators.required)
  })
  constructor(private authService: AuthenticationService, private activeRoute: ActivatedRoute,private uiService:UiService,private router:Router) {
    this.activeRoute.queryParams.subscribe(params => {
      this.verification.controls['username'].patchValue(params.id)
    })
  }

  ngOnInit(): void {

  }

  validateToken() {
    this.uiService.showLoader()
    this.authService.validateToken(this.verification.controls['code'].value, this.verification.controls['username'].value).then(res => {
     this.uiService.hideLoader()
     this.authService.setVerificationCode(this.verification.controls['code'].value)
      this.router.navigate(['Replacepassword'])
    }, rej => {
      this.uiService.hideLoader()
      this.message = rej.error.message;
      this.uiService.showDialog()
      // console.log(rej.error.message)
    })
  }

}
