import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  registration(userObj){
    this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', userObj)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

  loginUser(userObj){
    this.http.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', userObj)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);  
      })
  }

  forgotPassword(userObj){
    this.http.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset', userObj)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

  resetPassword(userObj){
    this.http.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password/:token', userObj)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
}