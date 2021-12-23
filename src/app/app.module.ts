import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard,AnAuthGuard} from './_guards/index';

import { FormsModule } from '@angular/forms'; 
import { SelectDropDownModule } from 'ngx-select-dropdown' 

import { routing }        from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AddTodolistComponent } from './add-todolist/add-todolist.component';
import { SigninComponent } from './signin/signin.component';
import { ValidationComponent } from './validation/validation.component';
import  {AllservicesService} from './allservices.service';
import {JwtHttpInterceptor} from './jwthttpinterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AddTodolistComponent,
    SigninComponent,
    ValidationComponent,
    TodolistComponent
  ],
  imports: [
	RouterModule,
    BrowserModule,
   HttpClientModule,
    FormsModule,
 SelectDropDownModule,
    routing
 
  ],
  providers: [
	    AuthGuard,
        AnAuthGuard,
     { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true }, 
        AllservicesService
	
],
  bootstrap: [AppComponent]
})
export class AppModule { }



