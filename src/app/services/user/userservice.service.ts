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
  
  loginuserservice(Obj){
    let url= 'user/login'
    let auth = false;
    return this.svc.post(Obj,url,auth);
  }

  registeruserservice(Obj){
    let url= 'user/userSignUp'
    let auth = false;
    return this.svc.post(Obj,url,false);
  }

  forgotuserservice(Obj){
    let url= 'user/reset'
    let auth = false;
    return this.svc.post(Obj,url,auth);
  }

  resetuserservice(Obj){
    console.log(Obj);
    let url= 'user/reset-password'
    return this.svc.postreset(this.getEncodedData(Obj),url);
  }

  profileimageuserservice(Obj){
    let url= '/user/uploadProfileImage';
    return this.svc.postImage(Obj,url);
  }

  getEncodedData(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  
}
