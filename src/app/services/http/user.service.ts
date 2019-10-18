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
  httpOptions={
    headers:new HttpHeaders({
    'Content-type':'application/json',
    'Authorization':localStorage.getItem('id')
    })
    }

  constructor(private http: HttpClient) {
  }

  print(arg) {
    console.log(arg);
  }

  post(userObj,url,auth) {
    if(auth==false){
      return this.http.post(this.baseUrl + url, userObj);
    }
    else{
      return this.http.post(this.baseUrl + url, userObj, this.httpOptions);
    }
  }

  get(url,auth) {
    if(auth==false){
      return this.http.get(this.baseUrl + url);
    }
    else{
      return this.http.get(this.baseUrl + url,this.httpOptions);
    }
  }

  postImage(Obj,url){
    let httpOptions1={
      headers:new HttpHeaders({
      'Authorization':localStorage.getItem('id')
      })
      }
  
    return this.http.post(this.baseUrl + url, Obj, httpOptions1);
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