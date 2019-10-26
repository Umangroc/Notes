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
  @Output() ReminderEvent= new EventEmitter<string>();

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {      
  }

  receiveMessage($event) {
    this.messageEvent.emit($event);
    console.log("In notefooter, recievemessage....",$event);
  }

  receiveReminder($event){
    this.ReminderEvent.emit($event);
    console.log("In notefooter, receive Reminder....",$event);
  }

  openDialog(noteId){
    this.dialog.open(CollaboratorsdialogComponent, {data: {noteid: noteId}, width: '600px',height: '257px'});
  }
}
