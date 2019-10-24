import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteComponent } from '../note/note.component';
import { Dialog } from '../../models/dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialog: Dialog;
  response: any;
  result: any;
  noteId: any;
  title = new FormControl;
  description = new FormControl;
  colordialog: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private svc: NoteService, private dataSvc: DataService, public dialogRef: MatDialogRef<NoteComponent>) {
    this.colordialog = data.color;
  }

  ngOnInit() {
  }
  
  receiveMessage($event) {
    this.colordialog = $event;
    console.log(this.colordialog);
  }

  updateData() {
    
    this.dialog = {
      title: this.title.value,
      description: this.description.value,
      noteId: this.data.noteId
    }
    if ((this.dialog.title == null) && (this.data.title != null)) {
      this.dialog.title = this.data.title;
    }
    if ((this.dialog.description == null) && (this.data.description != null)) {
      this.dialog.description = this.data.description;
    }

    if ((this.dialog.title == "") && (this.dialog.description == "")) {
      this.dialog.title = "Empty Note";
    }
    //console.log(this.dialog);

    this.result = this.svc.updatenoteservice(this.dialog)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
      //console.log(this.response);
    });

    this.dialogRef.close();
  }


}
