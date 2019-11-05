import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router,
    private dataSvc: DataService) { }

  ngOnInit() {
  }

  Send(type){
    //console.log("type........",type);
    
    this.dataSvc.changeMessage(type);
    this.router.navigate(["/register"]);
  }

}
