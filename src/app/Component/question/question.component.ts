import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  notedetails: any;
  token: any;
  question : any;

  constructor(private svc: NoteService,
    private dataSvc: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('id');
    this.getnotedetails(this.token);
  }

  getnotedetails(id) {
    this.svc.getnotedetailsnoteservice(id).subscribe((res: any) => {
      console.log(res.data.data);
      this.notedetails = res.data.data;
    })
  }

  askquestion(id){
    let data = {
      message: this.question,
      notesId: id
    }
    this.svc.askquestionnoteservice(data).subscribe((res: any) => {
      this.getnotedetails(this.token);
      //console.log(this.question);
      
      this.question = "";
      console.log(res);
      })
  }





}
