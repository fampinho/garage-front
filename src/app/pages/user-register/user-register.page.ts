import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {


  username: any;
  password: any;
  role = "CUSTOMER";
  name: any;
  id: any;
  idCust: any;
  midName: any;
  surname: any;
  phone: any;
  ppsn: any;
  body: any;
  email: any;
  typeVehicle: any;
  vehicles: any[];
  dataCustomer: any[];
  fuelVehicle: any;
  licenceNumber: any;
  maker: any;
  manufacture: any;
  model: any;

  constructor(private actRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  onCreate() {

    this.body = {
      username: this.username,
      password: this.password,
      id: this.idCust,
      email: this.email,
      role: this.role,
      name: this.name,
      midName: this.midName,
      surname: this.surname,
      phone: this.phone,
      ppsn: this.ppsn,
      vehicles: this.vehicles
    }
    this.http.post<any>("http://localhost:8080/garage/customer/add", this.body).subscribe(data => {

      let uri = encodeURI('http://localhost:8080/garage/customer/findByPPSN?ppsn=');
      this.http.get(uri + this.ppsn).subscribe(data => {
        let login = {
          username: this.username,
          password: this.password,
          id: data.id,
          role: this.role
        }
        this.http.post<any>("http://localhost:8080/garage/login/register", login).subscribe(data => {
          this.router.navigate(['']);
        })
      })
    })
  }

  addVehicle() {
    this.vehicles = new Array;
    let vehicles = {
      fuel: this.fuelVehicle,
      licenceNumber: this.licenceNumber,
      maker: this.maker,
      manufacture: this.manufacture,
      model: this.model,
      type: this.typeVehicle


    }
    this.vehicles.push(vehicles);
  }

  removeVehicle() {
    this.vehicles.pop()
  }

}
