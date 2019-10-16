import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { User } from '../../models/reset.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  userObj: User = new User();
  hide = true;
  result: any;
  response: any;
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.password.value)]);
  token : string;

  constructor(private svc: UserserviceService,private route : ActivatedRoute) {
    this.svc.print("inside reset password");
  }

  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
    localStorage.setItem('token',this.token);
  }
  PasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return "Password is required"
    }
    if (this.password.hasError("minlength")) {
      return "Password must be 8 characters"
    }

  }

  ConfirmPasswordInvalidMessage() {
    if (this.confirmPassword.hasError("required")) {
      return "Password is required"
    }
    if (this.confirmPassword.hasError("minlength")) {
      return "Password must be 8 characters"
    }
    if (this.confirmPassword.hasError("pattern")) {
      return "Password did not match"
    }
  }

  onResetPassword() {
    this.userObj = {
      newPassword: this.password.value,
      service: "basic"
    }
    this.svc.resetuserservice(this.userObj).subscribe((response) => {
        response = response;
        console.log(response);
      })
  }
}