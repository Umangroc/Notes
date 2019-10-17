import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-matmenu-icon',
  templateUrl: './matmenu-icon.component.html',
  styleUrls: ['./matmenu-icon.component.scss']
})
export class MatmenuIconComponent implements OnInit {
  @Input() id: any;
  @Input() mat: any;
  result: any;
  response: any;

  constructor(private svc: NoteService, private dataSvc: DataService) { }

  ngOnInit() {  
  }
  trash(noteId){
    let trash = {
      isDeleted: true,
      noteIdList: [noteId],
    }
    this.result = this.svc.trashnoteservice(trash)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(this.response);
    });
  }

  deleteforever(noteId){
    console.log(noteId);
    
    let delfor = {
      isDeleted: true,
      noteIdList: [noteId],
    }
    this.result = this.svc.deleteforevernoteservice(delfor)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(this.response);
    });
  }

  restore(noteId){
    
    let delfor = {
      isDeleted: false,
      noteIdList: [noteId],
    }
    this.result = this.svc.trashnoteservice(delfor)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(this.response);
    });
  }

}
