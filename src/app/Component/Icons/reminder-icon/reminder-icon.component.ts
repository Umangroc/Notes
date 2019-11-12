import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-reminder-icon',
  templateUrl: './reminder-icon.component.html',
  styleUrls: ['./reminder-icon.component.scss']
})
export class ReminderIconComponent implements OnInit {
  @Input() id: any;
  @Output() ReminderEvent= new EventEmitter<string>();
  show: any = true;
  date = new FormControl(new Date());
  
  
  constructor(private svc: NoteService, private dataSvc: DataService) {
    
   }

  ngOnInit() {
    
    
  }

  save(Noteid,picker3){
    //console.log("date........",picker3._validSelected);
    if(Noteid){
      let remind = {
      reminder: picker3._validSelected,
      noteIdList: [Noteid],
    }
    //console.log("asdasdasd...",archive);
    
    this.svc.remindernoteservice(remind).subscribe((response:any) => {
      console.log("succcessss.....",response);
      this.getNoteDetails(Noteid)
      this.dataSvc.changeMessage("Hello from Sibling")
    });
  }else{
    //console.log(picker3._validSelected);
    this.ReminderEvent.emit(picker3._validSelected);
  }
}

getNoteDetails(noteid){
  this.svc.getnotedetailsnoteservice(noteid).subscribe((res: any) => {
     console.log(res.data.data[0]);
      this.dataSvc.changedialog(res.data.data[0]);
})
}

}
