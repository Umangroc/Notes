import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  notedetails: any;
  token: any;
  question : any;
  show: any = false;
  answer: any;
  openid: any;
  userId = localStorage.getItem('userId');
  counting = 0; 
  state =false;
  flag =false;

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
    console.log("dtaa....",data);
    
    this.svc.askquestionnoteservice(data).subscribe((res: any) => {
      this.getnotedetails(this.token);
      //console.log(this.question);
      
      this.question = "";
      this.show = false;
      console.log(res);
      })
  }

reply(parentid){
  this.openid = parentid;
  this.show = !this.show;
  if(this.answer){
    let data ={
      message: this.answer
    }
    this.svc.replynoteservice(data,parentid).subscribe((res: any) => {
      this.getnotedetails(this.token);
      //console.log(this.question);
      
      this.answer = "";
      this.show = false;
      console.log(res);
      })
  }
}

  like(parentid){
      let data ={
        "like": true
      }
      this.svc.likenoteservice(data,parentid).subscribe((res: any) => {
        this.getnotedetails(this.token);
        //console.log(this.question);
        
        this.answer = "";
        this.show = false;
        console.log(res);
        })
  
}

dislike(parentid){
  let data ={
    "like": false
  }
  this.svc.likenoteservice(data,parentid).subscribe((res: any) => {
    this.getnotedetails(this.token);
    //console.log(this.question);
    
    this.answer = "";
    this.show = false;
    console.log(res);
    })

}

count(likes){
  //console.log("likes....",likes);
  this.counting = 0;
  for(let i=0;i<likes.length;i++){
    if(likes[i].like==true){
      this.counting++;
    }
    
  }
 // console.log(this.counting);
  
}

displayIcon(likes){
  //console.log("likes....",likes);
  this.flag=false;
  for(let i=0;i<likes.length;i++){
    if(likes[i].userId==this.userId){
    console.log(likes[i].like);
    this.flag=true;
      if(likes[i].like){
        this.state = true;
      }else{
        this.state = false;
      }
      break;
    }
  }
  return true;
}



}
