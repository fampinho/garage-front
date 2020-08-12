import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  username: any;
  role: any;
  name: any;
  id: any;
  idCust: any;
  midName: any;
  surname: any;
  phone: any;
  ppsn: any;
  email: any;
  vehicles: any[];

  constructor(private actRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }


  ngOnInit() {

    this.id = this.actRoute.snapshot.paramMap.get('id');
    let uri = encodeURI('http://localhost:8080/garage/login/findById?id=');
    this.http.get(uri + this.id).subscribe((data : any) => {
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

  onUpdate() {
    this.router.navigate(['user-update/' + this.id]);
  }
  
  onBooking(){
    this.router.navigate(['booking/' + this.idCust]);
  }
  
  viewBooking(){
    this.router.navigate(['booking-view/' + this.idCust]);
    this.router.navigate(['booking-view/' + null + "/" + this.idCust + "/"
    + this.vehicles[0].type + "/" + this.vehicles[0].maker + "/" + this.vehicles[0].model + "/" + this.vehicles[0].manufacture + "/" + this.vehicles[0].fuel + "/" + this.vehicles[0].licenceNumber + "/"
    + this.name + "/" + this.midName+ "/" + this.surname+ "/" + this.phone+ "/" + this.email+ "/" + this.ppsn]);
  }
}
