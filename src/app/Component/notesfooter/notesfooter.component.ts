import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-notesfooter',
  templateUrl: './notesfooter.component.html',
  styleUrls: ['./notesfooter.component.scss']
})
export class NotesfooterComponent implements OnInit {

  colorArray: any = [
    {color:'#ECEEEE'}, {color:'#F28B82'}, {color:'#F7BC04'}, {color:'#FAF474'}, 
    {color:'#CBFF90'}, {color:'#AAFEEB'}, {color:'#CBF0F8'},{color: '#ADCBFA'},
    {color:'#D7AEFB'}, {color:'#FDCFE8'}, {color:'#E6C9A8'},{color: '#FFFFFF'}];

  constructor(private svc: UserService) {

  }

  ngOnInit() {
  }

}
