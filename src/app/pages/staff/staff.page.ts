import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  username: any;
  role: any;
  name: any;
  id: any;
  idStaff: any;
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
    this.http.get(uri + this.id).subscribe((data:any) => {
      console.log(data)
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

  onUpdate() {
    this.router.navigate(['staff-update/' + this.id]);
  }

}
