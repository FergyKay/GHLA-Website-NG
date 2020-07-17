import { Router } from '@angular/router';
import { UiService } from './../../../services/ui.service';
import { AuthenticationService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-and-feedback',
  templateUrl: './help-and-feedback.component.html',
  styleUrls: ['./help-and-feedback.component.css', '../digi-library-assets/css/style.css']
})
export class HelpAndFeedbackComponent implements OnInit {

  message;

  feedbackForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true }, Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    message: new FormControl({ value: '', disabled: false }, Validators.required)
  })
  constructor(private authService: AuthenticationService, private ui: UiService,private router:Router) { }

  ngOnInit(): void {
    let user = this.authService.getCurrentUser()
    //  console.log(user)
    this.feedbackForm.controls['name'].patchValue(user.name)
    this.feedbackForm.controls['email'].patchValue(user.email)
  }

  submitFeedBack() {
    this.ui.showLoader()

    this.authService.submitFeedBack(this.feedbackForm.value).then(res => {
      this.message = "Thank you " + this.authService.getCurrentUser().name + " for the feedback! We will get in touch with you if needed"
      this.ui.hideLoader()
      this.ui.showDialog()

      setTimeout(()=>{
        this.ui.hideDialog()
        this.router.navigate(['/home/discover'])
      },2000)
    },rej=>{
      console.log(rej)
    })
  }




}
