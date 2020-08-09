import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.page.html',
  styleUrls: ['./booking-view.page.scss'],
})
export class BookingViewPage implements OnInit {
  id: any;
  idCust: any;
  name: any;
  midName: any;
  surname: any;
  staffName: any;
  staffMidName: any;
  staffSurname: any;
  staffPpsn: any;
  phone: any;
  ppsn: any;
  email: any;
  vehicles: any[];
  dtBooking: any;
  serviceType: any;
  description: any;
  appointment: any;
  type: any;
  maker: any;
  model: any;
  fuel: any;
  manufacture: any;
  licenceNumber: any;
  bookingStatus: any;

  constructor(private actRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idCust = this.actRoute.snapshot.paramMap.get('id');
    this.appointment = this.actRoute.snapshot.paramMap.get('appointment');
    this.type = this.actRoute.snapshot.paramMap.get('type');
    this.maker = this.actRoute.snapshot.paramMap.get('maker');
    this.model = this.actRoute.snapshot.paramMap.get('model');
    this.fuel = this.actRoute.snapshot.paramMap.get('fuel');
    this.manufacture = this.actRoute.snapshot.paramMap.get('manufacture');
    this.licenceNumber = this.actRoute.snapshot.paramMap.get('licenceNumber');
    this.name = this.actRoute.snapshot.paramMap.get('name');
    this.midName = this.actRoute.snapshot.paramMap.get('midName');
    this.surname = this.actRoute.snapshot.paramMap.get('surname');
    this.phone = this.actRoute.snapshot.paramMap.get('phone');
    this.email = this.actRoute.snapshot.paramMap.get('email');
    this.ppsn = this.actRoute.snapshot.paramMap.get('ppsn');
    let uri = encodeURI('http://localhost:8080/garage/booking/currentBooking?appointment=' + this.appointment + '&idCustomer=' + this.idCust);
    this.http.get(uri).subscribe((data: any) => {
      this.id = data.id;
      this.bookingStatus = data.bookingStatus;
      this.appointment = data.appointment;
      this.serviceType = data.serviceType;
      this.description = data.description;
      this.staffName = data.staff.name;
    })
  }


}
