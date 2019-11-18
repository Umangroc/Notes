import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';
import { CartdialogComponent } from '../cartdialog/cartdialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(choice){
    this.dialog.open(CartdialogComponent, {
      data: {
        type: choice
       }, width: '600px'
    });
  }


}
