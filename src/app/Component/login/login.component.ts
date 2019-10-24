import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../../models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userObj: User = new User();
  hide = true;
  result: any;
  response: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private svc: UserserviceService,private auth: AuthService, private router: Router) {
    this.svc.print("inside login");
  }

  ngOnInit() {
  }

  EmailInvalidMessage() {
    if (this.email.hasError("required"))
      return "Email is required"

    if (this.email.hasError("email"))
      return "Enter a valid email"
  }

  PasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return "Password is required"
    }
    if (this.password.hasError("minlength")) {
      return "Password must be 8 characters"
    }
  }

  onLogin() {

    this.userObj = {
      email: this.email.value,
      password: this.password.value,
      service: "basic"
    }
    this.result = this.svc.loginuserservice(this.userObj);
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
      localStorage.setItem('email', response.email);   
      localStorage.setItem('name', response.firstName+ ' '+response.lastName);   
      localStorage.setItem('id', response.id);   
      localStorage.setItem('imageUrl', response.imageUrl); 
      localStorage.setItem('userId', response.userId);     
      console.log("1111111111111",response.id);
         
      this.router.navigate(['/note']);
    },(error)=>{
      console.log(error);
      
    })
  }

}