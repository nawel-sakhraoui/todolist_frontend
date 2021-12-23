import { Component, OnInit } from '@angular/core';
import  {AllservicesService} from '../allservices.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AllservicesService, 
				private router: Router) { }
 
  form: any = {
    email: null,
    password: null
  }; 
  ngOnInit(): void {
	
	
  }

 isLoginFailed= false ;
erroremail = false ; 
erroremailenabled= false;
	onSubmit(){
	
	 this.isLoginFailed = false ; 
       this.erroremailenabled= false;
		this.erroremail = false
	
	  
	     this.service.checkEmail( this.form.email)
         .subscribe(
	      	data=>{
		      console.log(data)
             
		       if(!data)
              this.service.checkEnable(this.form.email)
		.subscribe(
			data0=>{
				if (data0 )
				

         		 this.service.login( this.form.email, this.form.password  )
         	   .subscribe(
                data0 =>{
	
					
				   if(data0){
				 	  	let token:any= data0
						
			            console.log(token)
				    	this.erroremail = false
					 	this.isLoginFailed = false
					this.erroremailenabled= false ;
						//update token + go to main 
				  		localStorage.setItem('user', JSON.stringify({ token:token['token'],email:this.form.email}));
							 this.router.navigate(['/main']);

						}else				 this.isLoginFailed = true ;
				},error=>{
					 console.log(error)
					 this.isLoginFailed = true ; 
				})
				
				else 
						this.erroremailenabled= true ;
				 
		       },err=>{
		  console.log(err)
		  this.isLoginFailed = true ; 
	
	
	})
	 else 
						this.erroremail= true ;
	  },err=>{
		  console.log(err)
		  this.isLoginFailed = true ; 
	})
	}
	
}
