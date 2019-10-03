import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/login.model';


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

  constructor(private svc: UserService) { 
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
    this.result=this.svc.post(this.userObj,'login');
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

}