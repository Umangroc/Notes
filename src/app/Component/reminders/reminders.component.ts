import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  name: String = "all";
  remindComp: any;

  constructor(private svc: NoteService, private dataSvc: DataService,public dialog: MatDialog) { }

  ngOnInit() {    
    this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res: any) => {
      this.getNoteData();
    })
  }
  getNoteData() {
    this.svc.reminderdisplaynoteservice().subscribe((response: any) => {
      this.remindComp = response.data.data;
      this.remindComp.reverse();
      // console.log("hit api...",response);
      // console.log("data list.....",this.remindComp);
      
      
    }, (error) => {
      console.log(error);
    });
  }

}
