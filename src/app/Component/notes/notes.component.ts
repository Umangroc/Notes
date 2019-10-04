import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{

  constructor(private svc: UserService) { }

  message:string;

  ngOnInit() {
    this.svc.currentMessage.subscribe(message => this.message = message)
  }

}
