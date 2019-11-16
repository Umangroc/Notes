import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cartdialog',
  templateUrl: './cartdialog.component.html',
  styleUrls: ['./cartdialog.component.scss']
})
export class CartdialogComponent implements OnInit {

  constructor(private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CartComponent>,
    private dataSvc: DataService) { }

  ngOnInit() {
  }

  Send(type){
    //console.log("type........",type);
    this.dialogRef.close();
    this.dataSvc.changeType(type);
    this.router.navigate(["/register"]);
  }

  close() {
    this.dialogRef.close();
  }

}
