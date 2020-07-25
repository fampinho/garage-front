import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }

  data : any;
  username: string;
  password: string;
  
  ngOnInit() { }
  
  onLogin() {

      let body =  {
       username: this.username,
       password: this.password
   }
    this.http.post<any>('http://localhost:8080/garage/login', body).subscribe(data => {
    this.data = data;
    // console.log(data)
    // console.log(this.data)
    // this.router.navigate(['/user']);
})
// console.log(this.data+"abs")
    // this.router.navigate(['/user'], this.data);
    // console.log(this.data.id);
    // alert(1)
    // alert(2)

  }



};
