import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CollaboratorsdialogComponent } from '../collaboratorsdialog/collaboratorsdialog.component';


@Component({
  selector: 'app-notesfooter',
  templateUrl: './notesfooter.component.html',
  styleUrls: ['./notesfooter.component.scss']
})

 
export class NotesfooterComponent implements OnInit {
  @Input() noteId: any;
  @Input() function: any;
  message: any;
  @Output() messageEvent= new EventEmitter<string>();
  
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {      
  }

  receiveMessage($event) {
    this.message = $event;
    this.messageEvent.emit($event);
    //console.log("In notefooter....",this.message);
  }

  openDialog(noteId){
    this.dialog.open(CollaboratorsdialogComponent, {data: {noteid: noteId}, width: '600px',height: '257px'});
  }
}
