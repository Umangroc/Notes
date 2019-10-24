import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  name: String = "all";
  note: any;
  options: any;
  message: String;

  constructor(private svc: NoteService, private dataSvc: DataService, public dialog: MatDialog) { }

  ngOnInit() {    
     this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res: any) => {
       this.getNoteData();
     })
  }

  getNoteData() {
    
    this.svc.displaynoteservice().subscribe((response: any) => {
      this.note = this.filterlist(response.data.data);
      console.log("in note component",this.note);
      this.note.reverse();
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
