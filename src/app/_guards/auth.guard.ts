import { Injectable,  Inject,  PLATFORM_ID    } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

 


@Injectable()//{ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
 
    constructor(private router: Router ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   console.log(localStorage.getItem('user') )
  if  (localStorage.getItem('user') ){ 
               
                return true ;
          }else 
				this.router.navigate(['/login']);
                return false ; 
        }
    
    
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            return this.canActivate(route, state);
     }
    
    
}