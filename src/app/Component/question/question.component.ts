import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  notedetails: any;
  constructor(private svc: NoteService,
    private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.currentMessage.subscribe((res: any) => {
      console.log("in display", res);
        this.getnotedetails(res);
      
    })
  }

  getnotedetails(id){
    this.svc.getnotedetails(id).subscribe((res: any)=>{
console.log(res.data.data[0].title);
this.notedetails = res.data.data[0];
    })
  }

  



}
