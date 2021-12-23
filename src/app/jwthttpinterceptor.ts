import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,  Inject,  PLATFORM_ID   } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      
    //  let userid = "annonym"; 
    // localStorage.setItem('currentUser', JSON.stringify({userid,  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlUyRnNkR1ZrWDE5QU1kQjBXMWNSMkJlc2ZNUVVMSGt5VEdkaklsZDV3Njg9IiwiaWF0IjoxNTg1Mzc4OTM4fQ.IvZiaXujfWEFauOpCnIfzLv9f1a0VzpHuiYbE_J6kDM" }))


 	let e = localStorage.getItem('user')  
	let token ="";
	if (e!=null)
	    token =  JSON.parse(e)['token'].toString()
 
    
      let clone: HttpRequest<any>;
      console.log('interceptor') ; 
      console.log(request) ; 
     
     
      if (token) {
        clone = request.clone({
          setHeaders: {
            Accept: `application/json`,
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token}`
            
          }
        });
      } else {
        clone = request.clone({
          setHeaders: {
            Accept: `application/json`,
            'Content-Type': `application/json`
          }
        });
      }
          
      return next.handle(clone);
  
      }
}