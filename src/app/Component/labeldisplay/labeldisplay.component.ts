import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-labeldisplay',
  templateUrl: './labeldisplay.component.html',
  styleUrls: ['./labeldisplay.component.scss']
})
export class LabeldisplayComponent implements OnInit {
  message: any;
  note: any;
  name: String = "all";
  constructor(private svc: NoteService, private dataSvc: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res: any) => {
       this.getNoteData();
     })
  }

  getNoteData() {
   
    this.dataSvc.currentMessage.subscribe((res:any) => {
    //  console.log("In ng on init",res);
     let data={
      labelName: res
    }
    this.svc.labeldisplaynoteservice(data).subscribe((response: any) => {
      this.note = response.data.data;
      this.note = this.filterlist(response.data.data);
      this.note.reverse();
      // console.log("response........",response);
      // console.log("notes........",this.note);      
    }, (error) => {
      console.log(error);
    });
    });   
   
  }

  filterlist(allnote) {
    var notes = allnote.filter(function (note) {
      return (note.isArchived == false && note.isDeleted == false);
    });
    return notes;
  }
}
