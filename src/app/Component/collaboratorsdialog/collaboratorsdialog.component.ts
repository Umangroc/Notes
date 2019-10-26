import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-collaboratorsdialog',
  templateUrl: './collaboratorsdialog.component.html',
  styleUrls: ['./collaboratorsdialog.component.scss']
})
export class CollaboratorsdialogComponent implements OnInit {
  email = localStorage.getItem('email');   
  name = localStorage.getItem('name');
  url: any;
  backurl: any;
  myControl = new FormControl();
  options: any;
  searchPeople: any;
  any: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private svc: NoteService,private dataSvc: DataService,private router: Router, public dialogRef: MatDialogRef<DashboardComponent>) { 
      this.backurl = localStorage.getItem('imageUrl');  
      if(this.backurl){
        this.url = 'http://fundoonotes.incubation.bridgelabz.com/' + this.backurl;
      }else{
        this.url="";
      }
    

  }

  ngOnInit() {
  }

  valuechange(newValue) {
    let userObj = {
      searchWord: newValue
    }
    this.svc.userlistnoteservice(userObj).subscribe((response: any) => {
      console.log(response.data.details);
      this.options = response.data.details;
      this.any = response.data.details;
    }) 
  }

  addCollaborator(){
    console.log("sdasdsd",this.any);
    
    let userObj = {
      email: this.any[0].email,
      firstName: this.any[0].firstName,
      lastName: this.any[0].lastName,
      userId: this.any[0].userId
    }
    console.log(this.data);
    console.log(userObj);
    
    
    this.svc.addcollaboratornoteservice(userObj,this.data.noteid).subscribe((response: any) => {
      console.log(response);
      this.dataSvc.changeMessage("Hell");
    }) 
  }

  close() {
    this.dialogRef.close();
  }

  
}
