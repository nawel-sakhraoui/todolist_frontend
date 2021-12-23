
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AllservicesService {

  host = "http://localhost:3000"
  constructor(private http:HttpClient) { }





    
    //check storage name 
     signin(name:string, email:string, pwd:string){

	console.log('signin')
        return this.http.post(this.host+'/api/user/signin',{"name":name, "email":email, "password":pwd}) ; 
        
    }
    
      checkEmail(email:string){
	console.log(email)
	      return this.http.get(this.host+"/api/user/checkemail/"+email)
    }

	 validateEmail(token:string, email:string){
		console.log(token)
		return this.http.get(this.host+'/api/user/enable/token/'+token+'/email/'+email) ;
		
	}
	
	
	checkEnable(email:string){
		
		 return this.http.get(this.host+"/api/user/checkenable/"+email)
	}



 
     logout(email: string){
	    return this.http.put(this.host+'/api/user/logout/'+email, {}) ;  
	
      }
     login(email:string, password:string){
	     return this.http.put(this.host+'/api/user/login/email/', {email:email, password:password}) ; 
		}



	getUser(email:string){
		
		 return this.http.get(this.host+"/api/user/"+email)
	}
	getTodoLists(userid:string){
		
		 return this.http.get(this.host+'/api/alltodolists/'+userid)
	}
	
	addTodolist(userid:string, title:string, categorie:string, tasks: string){
		
	 return this.http.post(this.host+'/api/todolist/'+userid, {title:title, categorie:categorie, tasks:tasks}) ; 

	}


}