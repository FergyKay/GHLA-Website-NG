import { Component, OnInit} from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ DatePipe ]
})





export class SignupComponent implements OnInit {

  branches: any;
  signupForm: FormGroup;
  currentDate: any = new Date();
  deviceInfo = null;
  gender: { id: string; name: string; }[];
  professions;
  libraries;
  requests;
  
  data = [];


  constructor(private datePipe: DatePipe, private http:HttpClient, public fb: FormBuilder, public router: Router) {}


  ngOnInit(): void{

    this.gender = [
      {
        "id": "M",
        "name": "Male",
    },
    {
        "id": "F",
        "name": "Female",
    },
    ]

    // this.professions = this.auth.fetchProfessions();
    // this.libraries = this.auth.fetchLibraries().pipe(map((response: any)  => response)).subscribe(result => {
    //   this.branches = result.libraries[0].branches;
    //   });

    // this.signupForm = this.fb.group({
    //   branch_id: [''],
    //   name: [''],
    //   town: [''],
    //   dob: [''],
    //   gender: [''],
    //   phone: [''],
    //   profession_id: [''],
    //   email: ['']
    // });


    this.signupForm = new FormGroup({
      'branch_id': new FormControl((null), [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'town': new FormControl('', [Validators.required]),
      'dob': new FormControl('', [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'phone': new FormControl('',[Validators.maxLength(10),Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10), Validators.required]),
      'profession_id': new FormControl(null, [Validators.required]),
      'email': new FormControl('',[Validators.required, Validators.email]),
     });
 


      
  }





  onSubmit(){
    // this.auth.signUp(this.signupForm.value).subscribe((res) => {
    //   if (res.result) {
    //     this.signupForm.reset()
    //     this.router.navigate(['Signin']);
    //   }
    // })

  delete this.signupForm.value.terms
  this.http.post('https://api.ghanalibrary.org/auth/signup',this.signupForm.value).subscribe((result)=>{
    console.warn("result", result);
  })
  
  }
  



}


