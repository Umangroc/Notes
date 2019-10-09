import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { Note } from '../../models/note.model';
import { DataService } from 'src/app/services/data/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.scss']
})
export class DispComponent implements OnInit {

  notes: Note;
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
      data: {title: notes.title, description: notes.description}
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
      this.notes = response.data.data.reverse();
    }, (error) => {
      console.log(error);
    });
  }

}
