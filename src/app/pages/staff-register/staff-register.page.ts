import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-register',
  templateUrl: './staff-register.page.html',
  styleUrls: ['./staff-register.page.scss'],
})
export class StaffRegisterPage implements OnInit {
  username: any;
  password: any;
  role: any;
  id: any;
  email: any;
  name: any;
  midName: any;
  surname: any;
  ppsn: any;

  constructor(private http: HttpClient, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    let login = {
      username: this.username,
      password: this.password,
      role: this.role,
    }
    let body = {

      name: this.name,
      midName: this.midName,
      surname: this.surname,
      ppsn: this.ppsn
    }
    console.log(login)
    console.log(body)
    this.http.post<any>("http://localhost:8080/garage/login/register", login).subscribe(data => {
    this.http.post<any>("http://localhost:8080/garage/staff/add", body).subscribe((data: any) => {
        this.router.navigate(['admin']);
      })

    })
  }

}
