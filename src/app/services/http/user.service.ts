import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  error: any;
  baseUrl= environment.base;
  baseUrl1=environment.base1;

  constructor(private http: HttpClient){
  }
  
  print(arg){
    console.log(arg);
  }

  post(userObj){
    return this.http.post(this.baseUrl+userObj.url, userObj.data);
    }
    
    postWithTokens(userObj,options)
    {
    return this.http.post(this.baseUrl+userObj.url, this.getEncodedData(userObj.data),options);
    }
    
    //adding note in the api
    
    postWithTokensapi(userObj,options)
    {
    return this.http.post(this.baseUrl1+userObj.url, this.getEncodedData(userObj.data), options);
    
    }
    
    getEncodedData(data)
    {
    const formBody=[];
    for(const property in data )
    {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
    }

    getWithTokensapi(userObj,options)
{
  return this.http.get(this.baseUrl1+userObj.url,options);
}
  }