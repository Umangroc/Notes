import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/forgot.model';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  userObj: User = new User();
  result: any;
  response: any;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private svc: UserService) {
    this.svc.print("inside forgot password");
  }

  ngOnInit() {
  }
  EmailInvalidMessage() {
    if (this.email.hasError("required"))
      return "Email is required"

    if (this.email.hasError("email"))
      return "Enter a valid email"

  }
  onForgotPassword() {
   
    this.userObj = {
      email: this.email.value,
      service: "basic"
    }
    this.result=this.svc.post(this.userObj,'reset');
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

}