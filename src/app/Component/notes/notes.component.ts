import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { Note } from '../../models/note.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{
  show: boolean =true;
  response: any;
result: any;
title = new FormControl;
description = new FormControl;
note:Note = new Note();
  constructor(private svc: NoteService) { }

  

  toggle(){
    this.show = !this.show;
  }

  ngOnInit() {
  }
  receiveData(){
    this.note = {
    title : this.title.value,
    description : this.description.value,
    service: "basic"
    }
    
    let obj={
    data: this.note,
    url: 'addNotes'
    }
    
    this.result=this.svc.postwithToken(obj)
    this.result.subscribe((response) => {
    this.response = response;
    console.log(this.response);
    });
    
    this.toggle();
    }

}
