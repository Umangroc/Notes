import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../http/user.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private svc: UserService) { }
  postwithToken(userObj)
{
let httpOptions={
headers:new HttpHeaders({
'Content-type':'application/x-www-form-urlencoded',
'Authorization':localStorage.getItem('id')
})
}
return this.svc.postWithTokensapi(userObj,httpOptions);
}
}
