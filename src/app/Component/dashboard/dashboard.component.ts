import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog } from '@angular/material';
import { ImagedialogComponent } from '../imagedialog/imagedialog.component';
import { LabeldialogComponent } from '../labeldialog/labeldialog.component';
import { NoteService } from 'src/app/services/note/note.service';
import { Router } from '@angular/router';

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
  labels: any;
  values: any;
  view: any = "grid";

  constructor(private dataSvc: DataService, 
    public dialog: MatDialog, 
    private svc: NoteService, 
    private router: Router) {

     }

  ngOnInit() {
    this.getlabellist();
    this.dataSvc.currentMessage.subscribe((res) => {
     //console.log("In ng on init");
     this.getlabellist();
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
    this.dialog.open(ImagedialogComponent, {width: '1031px',height: '636px'});
  }

  changeimage(){
    this.backurl = localStorage.getItem('imageUrl');  
    if(this.backurl){
      this.url = 'http://fundoonotes.incubation.bridgelabz.com/' + this.backurl;
    }else{
      this.url="";
    }
  }

  openlabelDialog() {
    this.dialog.open(LabeldialogComponent, {width: '300px'});
  }

  getlabellist() {
    this.svc.getlabellistnoteservice().subscribe((response: any) => {
      this.labels = response.data.details.reverse();
      // console.log(response);
      // console.log("labelsss........", response.data.details);
    });
  }

  valuechange(newValue) {
    if(newValue.length==0 || newValue==null ){
      this.router.navigate(['/note']);
    }
    if(newValue.length>2){ 
      this.router.navigate(['/search']);
      this.dataSvc.changeMessage(newValue);
      console.log(newValue)
    }   
  }
  
openlabel(data){
  //console.log("lgagggggggggggggggggg",data);
  
  this.dataSvc.changeMessage(data);
  // this.router.navigate[("/label/{{label.label}}")]
}

listview(){
  this.view = "list";
  this.dataSvc.changeView(this.view);
}

gridview(){
  this.view = "grid";
  this.dataSvc.changeView(this.view);
}
}

