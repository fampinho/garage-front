import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private http: HttpClient, private actRoute: ActivatedRoute) { }

  data: any;
  username: string;
  password: string;

  ngOnInit() { }

  onLogin() {

    let body = {
      username: this.username,
      password: this.password
    }
    this.http.post<any>('http://localhost:8080/garage/login/login', body).subscribe(data => {
      this.data = data;
      if (data.role == "CUSTOMER") {
        this.router.navigate(['user/' + this.data.id]);

      } else if (data.role == "ADMIN") {
        this.router.navigate(['admin/' + this.data.id]);

      } else {
        this.router.navigate(['staff/' + this.data.id]);

      }
    })

  }

  onRegister() {
    this.router.navigate(['user-register/']);

  }



};
