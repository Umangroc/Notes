import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { User } from '../../models/forgot.model';
import { MatSnackBar } from '@angular/material';

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

  constructor(private svc: UserserviceService,
    private _snackBar: MatSnackBar) {
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
      email: this.email.value
    }
    this.result=this.svc.forgotuserservice(this.userObj);
    this.result.subscribe((response) => {
      this.response = response;
      this.openSnackBar('Reset Link sent to your registered email, please check.',"Close");
      console.log(this.response);
    },(error)=>{
      this.openSnackBar('Email not found.',"Close");
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}