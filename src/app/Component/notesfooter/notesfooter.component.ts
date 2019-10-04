import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notesfooter',
  templateUrl: './notesfooter.component.html',
  styleUrls: ['./notesfooter.component.scss']
})
export class NotesfooterComponent implements OnInit {

  message: string;

  constructor(private svc: UserService) {

  }

  ngOnInit() {
    this.svc.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.svc.changeMessage("Hello from Sibling")
  }

}
