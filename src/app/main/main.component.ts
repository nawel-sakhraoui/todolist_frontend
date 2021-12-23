import { Component, OnInit } from '@angular/core';
import  {AllservicesService} from '../allservices.service'

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute,
				private router : Router,  
				private service : AllservicesService) { }
 
email =""
//  email =JSON.parse(localStorage.getItem('user'))['email'] ;  

user:any={}
todolists:any =[]; 
categories =['cat1', 'cat2', 'cat3', 'cat4', 'cat5']
ngOnInit(): void {
	let e = localStorage.getItem('user')  
	if (e!=null){
	
  this.email= JSON.parse(e)['email'].toString()
console.log(this.email)
  }

	this.service.getUser(this.email)
	.subscribe(
		data=>{
			console.log(data)
			
			
			this.user=data ;
			this.service.getTodoLists(this.user['user_id']) 
			.subscribe(
				data0=>{
					console.log(data0)
					this.todolists = data0 
				},error0=>{
					console.log(error0)
				}
			)
		},error=>{
			console.log(error)
		}
	)
	
}


logout (){
	this.service.logout(this.email)
	.subscribe(
		data=>{
			console.log(data)
			if(data) {
			localStorage.removeItem('user');
			 this.router.navigate(['/login']);
		}
		},error=>{
			console.log(error)
		}
	)
	
}

login(){
	
}

}
