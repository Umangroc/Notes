import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  userObj: User = new User();
  hide = true;
  result: any;
  response: any;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);


  constructor(private svc: UserserviceService) {
    this.svc.print("inside register");
  }

  ngOnInit() {
  }

  FirstNameInvalidMessage() {
    if (this.firstName.hasError("required"))
      return "First Name is required"
  }

  LastNameInvalidMessage() {
    if (this.lastName.hasError("required"))
      return "Last Name is required"
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

  onRegister() {

    this.userObj = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
      service: "basic"
    }
    let obj={
      data: this.userObj,
      url: 'userSignUp'
      }
    this.result = this.svc.PostwithoutToken(obj);
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }
}