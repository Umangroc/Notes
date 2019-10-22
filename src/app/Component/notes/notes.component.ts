import { Component, OnInit,Input } from '@angular/core';
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
  @Input() component: any;
  show: boolean = true;
  response: any;
  result: any;
  title = new FormControl;
  description = new FormControl;
  note: Note;
  titlemodel: any;
  descriptionmodel: any;
  color: any = '#fff';

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
      color: this.color,
      service: "basic"
    }
    if (this.title.value == null && this.description.value == null) {
      this.toggle();
    }
    else {
      this.result = this.svc.addnoteservice(this.note)
      this.result.subscribe((response) => {
        this.response = response;
        this.dataSvc.changeMessage("Hello from Sibling")
        console.log(this.response);
      });
      this.titlemodel='';
      this.descriptionmodel='';
      this.color='';
      this.toggle();
    }
  }

  receiveMessage($event) {
    this.color =$event;
    console.log("hell.....",$event);
  }


}
