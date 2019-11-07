import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UserserviceService } from 'src/app/services/user/userservice.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  address = new FormControl('', [Validators.required]);
  cartid: any;
  type: any;

  constructor(private _formBuilder: FormBuilder,
    private svc: UserserviceService) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getmycart();
  }

  getmycart(){
    this.svc.myCartUserService().subscribe((response: any) => {
      console.log("hit api...",response);
      this.cartid = response.data[0].id;
      this.type = response.data[0].productId;
       console.log("data list.....",this.type);
    }, (error) => {
      console.log(error);
    });
  }

  placeOrder(){
    let data={
      address: this.address.value,
      cartId: this.cartid
    }
    console.log("data./....",data);
    this.svc.placeOrderUserService(data).subscribe((response: any) => {
      console.log("hit api...",response);   
    }, (error) => {
      console.log(error);
    });
  }

}
