import { Component, OnInit } from '@angular/core';
import  {AllservicesService} from '../allservices.service'

import { ActivatedRoute, Router } from '@angular/router'; 


@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.css']
})
export class AddTodolistComponent implements OnInit {

  constructor(private route: ActivatedRoute,
				private router : Router,  
				private service : AllservicesService) { }
 
email =""
//  email =JSON.parse(localStorage.getItem('user'))['email'] ;  

user:any={}
model={"title":"", categorie:"", tasks:''}
loading = false ; 

categories =['cat1', 'cat2', 'cat3', 'cat4', 'cat5']
config={
	
}




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


newtodolist(){
	console.log(this.model )
	this.service.addTodolist(this.user['user_id'], this.model.title, this.model.categorie, this.model.tasks)
	.subscribe(
		data=>{
			console.log(data)
				 this.router.navigate(['/main']);
		}, error=>{
			console.log(error)
		}
	)
}

}