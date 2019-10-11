import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { Note } from '../../models/note.model';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  archi = "true";
  show: boolean = true;
  response: any;
  result: any;
  title = new FormControl;
  description = new FormControl;
  note: Note;

  constructor(private svc: NoteService, private dataSvc: DataService) { }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
  }
 
  receiveData() {
    this.note = {
      title: this.title.value,
      description: this.description.value,
      service: "basic"
    }

    let obj = {
      data: this.note,
      url: 'addNotes'
    }
    if (this.title.value == null && this.description.value == null) {
      this.toggle();
    }
    else {
      this.result = this.svc.postwithToken(obj)

      this.result.subscribe((response) => {
        this.response = response;
        this.dataSvc.changeMessage("Hello from Sibling")
        console.log(this.response);
      });

      this.toggle();
    }
  }


}
