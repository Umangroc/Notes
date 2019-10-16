import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-notesfooter',
  templateUrl: './notesfooter.component.html',
  styleUrls: ['./notesfooter.component.scss']
})

 
export class NotesfooterComponent implements OnInit {
  @Input() noteId: any;
  @Input() function: any;
  
  constructor() {

  }

  ngOnInit() {       
  }

}
