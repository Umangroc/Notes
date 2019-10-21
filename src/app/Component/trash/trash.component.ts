import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  name: String = "trash";
  trashComp: any;

  constructor(private svc: NoteService, private dataSvc: DataService,public dialog: MatDialog) { }

  ngOnInit() {    
    this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res: any) => {
      this.getNoteData();
    })
  }
  getNoteData() {
    this.svc.trashdisplaynoteservice().subscribe((response: any) => {
      this.trashComp = response.data.data;
      this.trashComp.reverse();
    }, (error) => {
      console.log(error);
    });
  }

}
