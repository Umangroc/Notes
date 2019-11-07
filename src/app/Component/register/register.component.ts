import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/register.model';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  userObj: User = new User();
  hide = true;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  pack: string;
  cartid: any;
productid: any;

  constructor(private svc: UserserviceService,
    private dataSvc: DataService,
    private router: Router,
    private _snackBar: MatSnackBar) {
    this.svc.print("inside register");
  }

  ngOnInit() {
    this.dataSvc.currentType.subscribe((res: any) => {
      console.log("reswpoinse...",res);
      
      if(res=="default message"){
        this.pack = "basic";
      }else{
        this.pack = res;
      }
     
    console.log("pack....",this.pack);
    })
    this.getCartId();
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
      service: this.pack,
      cartId: this.cartid 
    }
    console.log("dataaaa......",this.userObj);
    
    this.svc.registeruserservice(this.userObj).subscribe((response: any) => {
      this.router.navigate(["/login"]);
      console.log(response);
    },(error)=>{
      this.openSnackBar('Wrong Entry',"Close");
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getCartId(){
  if(this.pack=="basic"){
    this.productid = "5bfe362b53c3df0040d852a7"
  }else{
    this.productid = "5bfe361553c3df0040d852a6"
  }

    let data ={
      productId: this.productid
    }
    //console.log("cartid form add to cart",data);
    this.svc.addToCartUserService(data).subscribe((response: any) => {
      this.cartid = response.data.details.id
      console.log(response);
      console.log(this.cartid);
      
    },(error)=>{
      console.log("errorrrrr...",error);
      
    })
  }
}