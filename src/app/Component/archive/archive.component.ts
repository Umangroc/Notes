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
  name: String = "archive";
  archive: any;

  constructor(private svc: NoteService, private dataSvc: DataService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getNoteData();
    this.dataSvc.currentMessage.subscribe((res: any) => {
      this.getNoteData();
    })
  }
  getNoteData() {
    this.svc.archivedisplaynoteservice().subscribe((response: any) => {
      this.archive = this.filterarchive(response.data.data);      
      this.archive.reverse();
      
    }, (error) => {
      console.log(error);
    });
  }

  filterarchive(allnote){
    var notes =  allnote.filter(function(note) {
      return note.isDeleted == false;
    });
    return notes;
  }


}
