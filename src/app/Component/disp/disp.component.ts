import { Component, OnInit, Input } from '@angular/core';
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
  @Input() display: any;
  @Input() component: any;
  options: any;
  message: String;

  constructor(private svc: NoteService, private dataSvc: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.display;
  }

  openDialog(notes) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: notes.title, description: notes.description, noteId: notes.id, recycle: true }
    });
  }

  receiveMessage($event) {
    this.message = $event;
  }
}
