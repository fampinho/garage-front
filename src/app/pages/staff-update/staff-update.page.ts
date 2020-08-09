import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common/';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-staff-update',
  templateUrl: './staff-update.page.html',
  styleUrls: ['./staff-update.page.scss'],
})
export class StaffUpdatePage implements OnInit {
  data: any;
  username: any;
  role: any;
  name: any;
  id: any;
  idStaff: any;
  midName: any;
  surname: any;
  phone: any;
  ppsn: any;
  vehicles: any[];
  body: any;
  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router, private _location: Location) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    let uri = encodeURI('http://localhost:8080/garage/login/findById?id=');
    this.http.get(uri + this.id).subscribe((data: any) => {
      this.idStaff = data.staff.id;
      this.username = data.username;
      this.role = data.role;
      this.name = data.staff.name;
      this.midName = data.staff.midName;
      this.surname = data.staff.surname;
      this.phone = data.staff.phone;
      this.ppsn = data.staff.ppsn;


    })
  }

  onSubmit() {
    this.body = {
      id: this.idStaff,
      role: this.role,
      name: this.name,
      midName: this.midName,
      surname: this.surname,
      phone: this.phone,
      ppsn: this.ppsn,
      vehicles: this.vehicles
    }
    this.http.put<any>('http://localhost:8080/garage/staff/update', this.body).subscribe(data => {
      this.data = data;

      this.router.navigate(['staff/' + this.id]);
    })

  }
}
