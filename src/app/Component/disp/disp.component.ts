import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.scss']
})
export class DispComponent implements OnInit {
  archi = "true";
  notes: any;
  options: any;
  message: String;

  constructor(private svc: NoteService, private dataSvc: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res: any) => {
      this.getNoteData();
    })
  }

  openDialog(notes) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: notes.title, description: notes.description, noteId: notes.id, recycle: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  receiveMessage($event) {
    this.message = $event;
    this.getNoteData();
  }
  getNoteData() {
    this.options =
      {
        url: 'getNotesList',
      }
    this.svc.getWithTokens(this.options).subscribe((response: any) => {

      this.notes = this.filterarchive(response.data.data);
      //console.log('response form the getnote data',this.notes);
      this.notes.reverse();

    }, (error) => {
      console.log(error);
    });
  }

  filterarchive(allnote) {
    var notes = allnote.filter(function (note) {
      return (note.isArchived == false && note.isDeleted == false);
    });
    return notes;
  }

}
