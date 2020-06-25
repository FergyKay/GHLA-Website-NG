import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { rejects } from 'assert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [DatePipe]
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

  termsAccepted =false


  constructor(public router: Router, private dataService: DataService,private auth:AuthenticationService) {

  }


  ngOnInit(): void {

    this.dataService.getLibraries().then(libs => {
      this.branches = libs

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
    })

    this.dataService.getProfessions().then(prof => {
      this.professions = prof
    })


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
      'branch_id': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'town': new FormControl(null, [Validators.required]),
      'dob': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.maxLength(10), Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10), Validators.required]),
      'profession_id': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });




  }



  signup(){
    this.auth.signup(this.signupForm.value).then(res=>{
      if((res as any).status==206){
        alert((res as any).errors)
      }else{
        
        alert('Account created. Check your mail')
        this.router.navigate(['signin'])
      } 
     
    },reject=>{
      alert(reject)
    })
   
  }

  navigateTo(route) {
    this.router.navigate([route])
  }




}


