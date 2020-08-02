import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  id: any;
  username: any;
  role: any;
  idCust: any;
  name: any;
  midName: any;
  surname: any;
  phone: any;
  ppsn: any;
  email: any;
  vehicles: any;
  constructor(private actRoute: ActivatedRoute, private http : HttpClient, private router : Router) { }

  ngOnInit() {

    // alert(1234)
    // this.id = this.actRoute.snapshot.paramMap.get('id');
    // let uri = encodeURI('http://localhost:8080/garage/findById?id=');
    // this.http.get(uri + this.id).subscribe(data => {
    //   this.idCust = data.customer.id;
    //   this.username = data.username;
    //   this.role = data.role;
    //   this.name = data.customer.name;
    //   this.midName = data.customer.midName;
    //   this.surname = data.customer.surname;
    //   this.phone = data.customer.phone;
    //   this.ppsn = data.customer.ppsn;
    //   this.email = data.customer.email;
    //   this.vehicles = data.customer.vehicles;
    // })

    alert(1122)
    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    let uri = encodeURI('http://localhost:8080/garage/login/findById?id=');
    this.http.get(uri + this.id).subscribe(data => {
      console.log(data)
      this.idCust = data.customer.id;
      this.username = data.username;
      this.role = data.role;
      this.name = data.customer.name;
      this.midName = data.customer.midName;
      this.surname = data.customer.surname;
      this.phone = data.customer.phone;
      this.ppsn = data.customer.ppsn;
      this.email = data.customer.email;
      this.vehicles = data.customer.vehicles;
    })
  }

  // ngOnInit() {

  //   this.id = this.actRoute.snapshot.paramMap.get('id');
  //   let uri = encodeURI('http://localhost:8080/garage/login/findById?id=');
  //   this.http.get(uri + this.id).subscribe(data => {
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
  // }

  onUpdate() {
    this.router.navigate(['user-update/' + this.id]);
  }

}
