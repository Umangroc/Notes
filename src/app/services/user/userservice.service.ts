import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserService} from '../http/user.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient,private svc: UserService) { }

  print(arg){
    console.log(arg);
  }
  
  PostwithoutToken(userObj){
  return this.svc.post(userObj);
  }
  
  postwithToken(userObj)
  {
  let httpOptions={
  headers:new HttpHeaders({
  'Content-type':'application/x-www-form-urlencoded',
  'Authorization':localStorage.getItem('token')
  })
  }
  return this.svc.postWithTokens(userObj,httpOptions);
  }
  
  
}
