import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';
import { MatDialog } from '@angular/material';
import { SearchPipe } from 'src/app/search.pipe';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  name = "all";
  searchText:string;
  filteredRecords:any;
  filterpipe: SearchPipe = new SearchPipe;
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
  
  getNoteData() {
    this.dataSvc.currentMessage.subscribe((searchText) => {
      console.log("In Search........",searchText);
      
      this.searchText = searchText
    });
    this.svc.displaynoteservice().subscribe((response: any) => {
      this.notes = this.filterlist(response.data.data);
      this.filteredRecords=this.filterpipe.transform(this.notes,this.searchText);
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
