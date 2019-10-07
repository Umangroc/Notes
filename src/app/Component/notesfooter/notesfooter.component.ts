import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/http/user.service';

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
  }

}
