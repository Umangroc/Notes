import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog } from '@angular/material';
import { ImagedialogComponent } from '../imagedialog/imagedialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText: any;
  email = localStorage.getItem('email');   
  name = localStorage.getItem('name');
  backurl: any;
  url: any;

  constructor(private dataSvc: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSvc.currentMessage.subscribe((res) => {
     // console.log("In ng on init");
      this.changeimage();
    });    
  }

  logout(){
    localStorage.clear();
  }

  search(){    
    this.dataSvc.changeMessage(this.searchText);
  }

  openDialog() {
    this.dialog.open(ImagedialogComponent, {width: '500px',height: '500px'});
  }

  changeimage(){
    this.backurl = localStorage.getItem('imageUrl');  
    this.url = 'http://fundoonotes.incubation.bridgelabz.com/' + this.backurl;
  }
  
}

