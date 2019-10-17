import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import {SearchPipe} from '../../search.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  component = "all";
  searchText:string;
  filterPipe: SearchPipe = new SearchPipe();
  filteredRecords:any;
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
  }
  getNoteData() {
    this.dataSvc.currentMessage.subscribe((searchText) => {
      this.searchText = searchText
    });
    this.svc.displaynoteservice().subscribe((response: any) => {
      this.notes = this.filterlist(response.data.data);
      this.filteredRecords=this.filterPipe.transform(this.notes,this.searchText);
      //this.display.reverse();
    }, (error) => {
      console.log(error);
    });
  }

  filterlist(allnote) {
    var notes = allnote.filter(function (note) {
      return (note.isArchived == false && note.isDeleted == false);
    });
    return notes;
  }
}
