import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  idCust: any;
  id: any;
  name: any;
  type: any;
  midName: any;
  surname: any;
  phone: any;
  ppsn: any;
  email: any;
  vehicles: any;
  appointment: any;
  serviceType: any;
  description: any;

  constructor(private actRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.idCust = this.actRoute.snapshot.paramMap.get('id');
    let uri = encodeURI('http://localhost:8080/garage/customer/findById?id=');
    this.http.get(uri + this.idCust).subscribe((data: any) => {
      this.name = data.name;
      this.midName = data.midName;
      this.surname = data.surname;
      this.phone = data.phone;
      this.ppsn = data.ppsn;
      this.email = data.email;
      this.vehicles = data.vehicles;
    })
  }

  removeVehicles(vIndex) {
    this.vehicles.splice(vIndex, 1);
  }

  blockSundays() {

    console.log(this.appointment)
    this.appointment = this.appointment.slice(0, 10);
    var d = new Date(this.appointment);
    if (d.getDay() == 0) {
      alert("The garage is closed on Sundays. Try booking another day.")
      this.appointment = "";
      return true;
    }
  }

  onSubmit() {

    if (this.appointment == null || this.serviceType == null || this.description == null) {
      alert("Please, fill up all mandatory fields(*).")
      return;
    } else { 
      if (this.blockSundays()) { 
        return;
      }
    }
    console.log(this.vehicles[1])
    if (this.vehicles == null) {
      alert("At leat one vehicle is necessary. Go to the user page and add your vehicle!")
    }
    if (this.vehicles[1] != null) {
      alert("Only one vehicle is allowed per booking!!!")
      return;
    }
    let body = {

      appointment: this.appointment,
      serviceType: this.serviceType,
      description: this.description,
      idCustomer: this.idCust,
      idVehicle: this.vehicles[0].id

    }

    this.http.post<any>('http://localhost:8080/garage/booking/add', body).subscribe((data: any) => {
      this.router.navigate(['booking-view/' + this.appointment + "/" + this.idCust + "/"
        + this.vehicles[0].type + "/" + this.vehicles[0].maker + "/" + this.vehicles[0].model + "/" + this.vehicles[0].manufacture + "/" + this.vehicles[0].fuel + "/" + this.vehicles[0].licenceNumber + "/"
        + this.name + "/" + this.midName + "/" + this.surname + "/" + this.phone + "/" + this.email + "/" + this.ppsn]);
    })
  }

}
