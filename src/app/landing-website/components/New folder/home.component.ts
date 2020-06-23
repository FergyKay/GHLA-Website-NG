import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  // template:'<p>{{data.date}} </p>',
  templateUrl: './home.component.html',
  styleUrls: ['../../css/styles.css']
})
export class HomeComponent implements OnInit {
  data =[];
  
  // constructor() { }
  constructor(private http: HttpClient) {
    this.http.get('http://localhost/ghlaapi/read.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
   
    
    }, error => console.error(error));
  }

  ngOnInit(): void{
    this.http.get('http://localhost/ghlaapi/read.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
     
      
      }, error => console.error(error));
  }

}
