import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import {MainComponent}  from './main/main.component';
import {AddTodolistComponent}  from './add-todolist/add-todolist.component';
import {LoginComponent}  from './login/login.component';
import {SigninComponent}  from './signin/signin.component';
import {ValidationComponent}  from './validation/validation.component';
import {AuthGuard, AnAuthGuard} from './_guards/index'; 



	
	
	
const appRoutes: Routes = [
  

    
 
       
   
   { path: '', component: MainComponent,  canActivate: [AuthGuard ]},
{ path: 'addtodolist', component: AddTodolistComponent,  canActivate: [AuthGuard ]  }
   , //  children:[

    
       
       /*
        { path: '', component: MainComponent,  canActivate: [AuthGuard ], 
          data: {
            permissions: {
                only: "ADMIN",
                redirectTo : "/"
             }
          
        }},
        
        { path: 'addtodolist', component: AddTodolistComponent,  canActivate: [AuthGuard], 
          data: {
            permissions: {
                only: "ADMIN",
                redirectTo : "/"
             }
          
        }},
        
     
  
    
        
      
           
                { path: '**', redirectTo: '/' , pathMatch: 'full' },
        ]*
},*/

 { path: 'validation', component: ValidationComponent,  canActivate: [AnAuthGuard ]},
    
    { path: 'login', component: LoginComponent, canActivate: [AnAuthGuard] },
  
  { path: 'signin', component: SigninComponent,  canActivate: [AnAuthGuard ]}, 

    { path: '**', redirectTo: '', pathMatch: 'full' },
    
 

    ];
	
	
		
	
	
	export const routing = RouterModule.forRoot(appRoutes)

