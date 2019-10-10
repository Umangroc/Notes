import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes: any;
  options: any;
  message: String;

  constructor(private svc: NoteService, private dataSvc: DataService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res: any) => {
      this.getNoteData();
    })
  }

  openDialog(notes) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {title: notes.title, description: notes.description, noteId: notes.id}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getNoteData() {
    this.options =
      {
        url: 'getNotesList',
      }
    this.svc.getWithTokens(this.options).subscribe((response: any) => {
      // console.log('response form the getnote data',response);
      this.notes = this.filterarchive(response.data.data);
      this.notes.reverse();
      
    }, (error) => {
      console.log(error);
    });
  }

  filterarchive(allnote){
    var notes =  allnote.filter(function(note) {
      return note.isArchived == true && note.isDeleted == false;
    });
    return notes;
  }


}
