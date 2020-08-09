import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

    this.appointment = this.appointment.slice(0, 10);
    var d = new Date(this.appointment);
    if (d.getDay() == 0) {
      alert("The garage is closed on Sundays. Try booking another day.")
      this.appointment = "";
    } else {
      alert(this.appointment + " has been added!!!")

    }
  }

  onSubmit() {

    let body = {

      appointment: this.appointment,
      serviceType: this.serviceType,
      description: this.description,
      idCustomer: this.idCust,
      idVehicle: this.vehicles[0].id
      // vehicle: {
      //   id : this.vehicles[0].id,
      //   type : this.vehicles[0].type,
      //   maker : this.vehicles[0].maker,
      //   model : this.vehicles[0].model,
      //   fuel : this.vehicles[0].fuel,
      //   manufacture : this.vehicles[0].manufacture,
      //   licenceNumber : this.vehicles[0].licenceNumber,
      // }


    }

    console.log(['booking-view/' + this.appointment + "/" + this.idCust + "/"
    + this.vehicles[0].type + "/" + this.vehicles[0].maker + "/" + this.vehicles[0].model + "/" + this.vehicles[0].manufacture + "/" + this.vehicles[0].fuel + "/" + this.vehicles[0].licenceNumber + "/"
    + this.name + "/" + this.midName+ "/" + this.surname+ "/" + this.phone+ "/" + this.email+ "/" + this.ppsn])
    this.http.post<any>('http://localhost:8080/garage/booking/add', body).subscribe((data: any) => {
      this.router.navigate(['booking-view/' + this.appointment + "/" + this.idCust + "/"
        + this.vehicles[0].type + "/" + this.vehicles[0].maker + "/" + this.vehicles[0].model + "/" + this.vehicles[0].manufacture + "/" + this.vehicles[0].fuel + "/" + this.vehicles[0].licenceNumber + "/"
        + this.name + "/" + this.midName+ "/" + this.surname+ "/" + this.phone+ "/" + this.email+ "/" + this.ppsn]);
    })
  }

}
