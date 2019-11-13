import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-labeldisplay',
  templateUrl: './labeldisplay.component.html',
  styleUrls: ['./labeldisplay.component.scss']
})
export class LabeldisplayComponent implements OnInit {
  message: any;
  note: any;
  name: String = "all";
label: any;

  constructor(private svc: NoteService,
     private dataSvc: DataService, 
     public dialog: MatDialog,
     private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.label = params['labelname'];
      this.getNoteData();
      });
    console.log("In ng on init",this.label);

    this.dataSvc.currentMessage.subscribe((res: any) => { 
       this.getNoteData();
     })
  }

  getNoteData() {
     let data={
      labelName: this.label
    }
    this.svc.labeldisplaynoteservice(data).subscribe((response: any) => {
      this.note = response.data.data;
      this.note = this.filterlist(response.data.data);
      this.note.reverse();
      //  console.log("response in labeldisplay........",response);
      // console.log("notes........",this.note);      
    }, (error) => {
      console.log(error);
    });
     
  }

  filterlist(allnote) {
    var notes = allnote.filter(function (note) {
      return (note.isArchived == false && note.isDeleted == false);
    });
    return notes;
  }
}
