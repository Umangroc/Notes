import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-labeldialog',
  templateUrl: './labeldialog.component.html',
  styleUrls: ['./labeldialog.component.scss']
})
export class LabeldialogComponent implements OnInit {
  labelmodel: any;
  labelinput = new FormControl;
  labelupdate = new FormControl;

  labels: any;
  constructor(public dialogRef: MatDialogRef<DashboardComponent>, private svc: NoteService, private dataSvc: DataService) { }

  ngOnInit() {
    this.getlabellist();
  }

  addlabel() {
    let id = localStorage.getItem('userId');
    this.labelmodel = '';
    let labelvalue = {
      label: this.labelinput.value,
      isDeleted: false,
      userId: id
    }
    this.svc.addlabelnoteservice(labelvalue).subscribe((response) => {
      // this.dataSvc.changeMessage("Hello from Sibling")
      console.log(response);
      this.getlabellist();
    });
  }

  getlabellist() {
    
    this.svc.getlabellistnoteservice().subscribe((response: any) => {
      this.labels = response.data.details.reverse();
      this.dataSvc.changeMessage(this.labels)
      // console.log(response);
      // console.log("labelsss........", response.data.details);
    });
  }

  deletelabel(labelId){
    let labelvalue = {
      id: labelId,
    }
    this.svc.deletelabelnoteservice(labelvalue).subscribe((response: any) => {
        //this.dataSvc.changeMessage("Hello from Sibling")
        //console.log("asdasdasdasds",response);
        this.getlabellist();
      });
  }

  updatelabel(labeldetails){
    let id = localStorage.getItem('userId');
    let labelvalue = {
      id: labeldetails.id,
      label: this.labelupdate.value,
    }
    if(labelvalue.label==null){
      labelvalue.label = labeldetails.label;
    }
    //console.log("Changed Label.....",labelvalue);
    this.svc.updatelabelnoteservice(labelvalue).subscribe((response) => {
      // this.dataSvc.changeMessage("Hello from Sibling")
      //console.log("Inside update function........",response);
      this.getlabellist();
    });
  }


  close() {
    this.dialogRef.close();
  }
}
