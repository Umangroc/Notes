import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-notesfooter',
  templateUrl: './notesfooter.component.html',
  styleUrls: ['./notesfooter.component.scss']
})

 
export class NotesfooterComponent implements OnInit {
  @Input() noteId: any;
  result: any;
  response: any;
  colorArray: any = [
    {color:'#ECEEEE'}, {color:'#F28B82'}, {color:'#F7BC04'}, {color:'#FAF474'}, 
    {color:'#CBFF90'}, {color:'#AAFEEB'}, {color:'#CBF0F8'},{color: '#ADCBFA'},
    {color:'#D7AEFB'}, {color:'#FDCFE8'}, {color:'#E6C9A8'},{color: '#FFFFFF'}];

  constructor(private svc: NoteService, private dataSvc: DataService) {

  }

  ngOnInit() {
  }

  archive(noteId){
    let archive = {
      isArchived: true,
      noteIdList: [noteId],
    }
    
    let obj = {
      data: archive,
      url: 'archiveNotes'
    }
    this.result = this.svc.postwithToken(obj)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(this.response);
    });
  }

  trash(noteId){
    let trash = {
      isDeleted: true,
      noteIdList: [noteId],
    }
    
    let obj = {
      data: trash,
      url: 'trashNotes'
    }
    this.result = this.svc.postwithToken(obj)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(this.response);
    });
  }

}
