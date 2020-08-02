import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common/';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.page.html',
  styleUrls: ['./user-update.page.scss'],
})
export class UserUpdatePage implements OnInit {
  data : any;
  username : any; 
  role : any; 
  name : any; 
  id : any; 
  idCust : any; 
  midName: any;
  surname: any;
  phone: any;
  ppsn: any;
  email: any;
  vehicles: any[];
  body: any;
  constructor(private http : HttpClient, private actRoute : ActivatedRoute, private router : Router, private _location : Location) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    let uri =encodeURI('http://localhost:8080/garage/login/findById?id=');
    this.http.get(uri+this.id).subscribe(data => {
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

  onSubmit(){
    this.body = {
      id : this.idCust,
       email : this.email,
       role : this.role,
       name : this.name,
       midName : this.midName,
       surname : this.surname,
       phone : this.phone,
       ppsn : this.ppsn,
       vehicles : this.vehicles
     }
     this.http.put<any>('http://localhost:8080/garage/customer/update', this.body).subscribe(data => {
       this.data = data;
       
       this.router.navigate(['user/' +this.id]);
      })

  }
}
