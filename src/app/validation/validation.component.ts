import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import  {AllservicesService} from '../allservices.service'



@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
				private router : Router,  
				private service : AllservicesService) { }

notvalidate = false ; 
alreadyvalidate = false ; 
	email =""; 
	token="" ; 
  ngOnInit(): void {
	
	    this.notvalidate = false ; 
		this.alreadyvalidate = false ; 
	this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.token = params['token'];
        this.email= params['email']

        this.service.checkEnable(this.email)
		.subscribe(
			data0=>{
				if (data0 )
				 this.alreadyvalidate = true ; 
			    else{
				           this.alreadyvalidate = false;
					         this.service.validateEmail( this.token, this.email )
							.subscribe(
			
							data=>{
							console.log(data)
							if (data ){
								
					         //navigate to the main page with token!
                            localStorage.setItem('user', JSON.stringify({email:this.email,  token: this.token}));
							 this.router.navigate(['/main']);
					
							this.notvalidate = false 
								}else 
								  this.notvalidate = true ; 
							},error=>{
								console.log(error)
								}
		                    )
				
			    }
			},error0=>{
				
			})
			
		})



  
      }}
    


