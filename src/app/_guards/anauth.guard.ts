import { Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

 

@Injectable()
export class AnAuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  
     if  (localStorage.getItem('user') ){ 
                this.router.navigate(['/']);
                return false ;
          }else 
                return true ; 
        }
      
}