import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  error: any;
  baseUrl = environment.base;
  

  constructor(private http: HttpClient) {    
  }

  print(arg) {
    console.log(arg);
  }

  post(userObj, url, auth) {
    if (auth == false) {
      return this.http.post(this.baseUrl + url, userObj);
    }
    else {
      let httpOptions = {    
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': localStorage.getItem('id')
        })
      }
      return this.http.post(this.baseUrl + url, userObj, httpOptions);
    }
  }

  get(url, auth) {
    if (auth == false) {
      return this.http.get(this.baseUrl + url);
    }
    else {
      let httpOptions = {    
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': localStorage.getItem('id')
        })
      }
      //console.log("In http srvice", httpOptions);
      return this.http.get(this.baseUrl + url, httpOptions);
    }
  }

  postImage(Obj, url) {
    let httpOptionsImage = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('id')
      })
    }

    return this.http.post(this.baseUrl + url, Obj, httpOptionsImage);
  }

  postreset(userObj,url){
    let httpOptionsReset = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('id')
      })
    }
      return this.http.post(this.baseUrl + url, userObj, httpOptionsReset);
  }

  delete(url) {
    let httpOptions = {    
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('id')
      })
    }
    return this.http.delete(this.baseUrl + url, httpOptions)
  }
 
}