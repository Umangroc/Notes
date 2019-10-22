import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-notesfooter',
  templateUrl: './notesfooter.component.html',
  styleUrls: ['./notesfooter.component.scss']
})

 
export class NotesfooterComponent implements OnInit {
  @Input() noteId: any;
  @Input() function: any;
  message: any;
  @Output() messageEvent= new EventEmitter<string>();
  
  constructor() {

  }

  ngOnInit() {      
  }

  receiveMessage($event) {
    this.message = $event;
    this.messageEvent.emit($event);
    console.log(this.message);
  }
}
