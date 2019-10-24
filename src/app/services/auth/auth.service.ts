import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }
  
  getToken() {
  return localStorage.getItem("id")
  }

  isLoggednIn() {  
  return this.getToken() !== null;
  }

}
