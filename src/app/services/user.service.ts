import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response: any;
  error: any;

  constructor(private http: HttpClient){
  }
  
  print(arg){
    console.log(arg);
  }

  post(userObj,Url){
    return this.http.post(environment.base+Url, userObj)
  }
}