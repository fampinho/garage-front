import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  username : any; 
id : any; 
  
  constructor( private actRoute : ActivatedRoute) { }
  
  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('username');
    alert(id)

  	this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
  		this.username = data.username;
  		console.log(data);
  	});
  }

  // ngOnInit() {
  //   this.actRoute.params.subscribe((data: any) =>{
  // 		this.username = data.username;
  // 		this.password = data.password;
  // 		console.log(data);
  // 	});
 
  //   this.sub = this.route.queryParams.subscribe(params => {
  //     // Defaults to 0 if no query param provided.
  //     console.log(params['username']+"aa")
  //     // console.log(params)
  //     this.username = +params['data'] || null;
  //   });
  // }

}
