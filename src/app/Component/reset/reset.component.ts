import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/reset.model';

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

  constructor(private svc: UserService) {
    this.svc.print("inside reset password");
  }

  ngOnInit() {
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
      newPassword: this.password.value
    }
    this.result = this.svc.post(this.userObj,'reset-password/:token')
    this.result.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }
}