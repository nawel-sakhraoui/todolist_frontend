import { Component, OnInit } from '@angular/core';
import  {AllservicesService} from '../allservices.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service:AllservicesService ) { }

    form: any = {
    username: null,
    password: null, 
	password2:null , 
	email:null
  }; 

   done = false ; 
  erroremail = false ; 
erroremail2= false ; 
  ngOnInit(): void {
  }

 
 isLoginFailed= false ; 
	onSubmit(){
	
	 this.isLoginFailed = false ; 
			 this.erroremail2 = false; 
		this.erroremail2 = false
	
	    if (this.form.password == this.form.password2)
	     this.service.checkEmail( this.form.email)
         .subscribe(
	      	data=>{
		      console.log(data)
             
		       if(data)
         		 this.service.signin(this.form.username, this.form.email, this.form.password  )
         	   .subscribe(
                data0 =>{
	
					 console.log(data0)
				 	 this.done = true ; 
						  this.erroremail = false
					 this.isLoginFailed = false 
				},error=>{
					 console.log(error)
					 this.isLoginFailed = true ; 
				})
				
				else 
				  this.erroremail = true 
	
	       },err=>{
		  console.log(err)
		  this.erroremail2 = true 
	})
	}
}
