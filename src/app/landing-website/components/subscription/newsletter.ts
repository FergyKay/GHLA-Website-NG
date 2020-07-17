// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-news-events',
//   templateUrl: './news-events.component.html',
//   styleUrls: ['./news-events.component.css', '../../css/styles.css']
// })
// export class implements OnInit {

//   email:any;
//   response:any;  
//   pageheader:any;
//   hold:any[];
    
//   constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {

//   }

//   ngOnInit(): void{
//     this.route.params.subscribe(params => {
//       this.email = params['email'];    
//       // console.log(this.articleid);
//     })
    
//     this.http.get('../ghlaapi/subscription.php?email='+this.email).subscribe(response => {
//       this.response = response;  
//       // console.log(this.articleread);
//       if(this.response.status == 201){
//         console.log("Subscription successful");
//       }else{
//         console.log("Error")
//       }    
//     },error => console.error(error));
    

//   }
  
  
// }
