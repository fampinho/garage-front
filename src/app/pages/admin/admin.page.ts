import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  createStaff() {

    this.router.navigate(['staff-register/']);
  //   this.id = this.actRoute.snapshot.paramMap.get('id');
  //   let uri = encodeURI('http://localhost:8080/garage/login/findById?id=');
  //   this.http.get(uri + this.id).subscribe((data : any) => {
  //     this.idCust = data.customer.id;
  //     this.username = data.username;
  //     this.role = data.role;
  //     this.name = data.customer.name;
  //     this.midName = data.customer.midName;
  //     this.surname = data.customer.surname;
  //     this.phone = data.customer.phone;
  //     this.ppsn = data.customer.ppsn;
  //     this.email = data.customer.email;
  //     this.vehicles = data.customer.vehicles;
  //   })
  }

}
