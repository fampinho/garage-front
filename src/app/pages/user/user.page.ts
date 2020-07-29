import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  username : any; 
  role : any; 
  name : any; 
  id : any; 
  midName: any;
  surname: any;
  phone: any;
  ppsn: any;
  vehicles: any[];
  
  constructor( private actRoute : ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    let uri =encodeURI('http://localhost:8080/garage/findById?id=');
    this.http.get(uri+this.id).subscribe(data => {
    this.username = data.username;
    this.role = data.role;
    this.name = data.customer.name;
    this.midName = data.customer.midName;
    this.surname = data.customer.surname;
    this.phone = data.customer.phone;
    this.ppsn = data.customer.ppsn;
    this.vehicles = data.customer.vehicles;
    console.log(this.vehicles)
    console.log(data)
    // this.router.navigate(['user/' +this.data.id]);
})
  }

}
