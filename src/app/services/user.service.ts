import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  response: any;
  error: any;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient){
  }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
  print(arg){
    console.log(arg);
  }

  post(userObj,Url){
    return this.http.post(environment.base+Url, userObj)
  }
}