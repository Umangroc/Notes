import { Component, OnInit, Input } from '@angular/core';
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
  show: any = true;
  date = new FormControl(new Date());
  
  
  constructor(private svc: NoteService, private dataSvc: DataService) {
    
   }

  ngOnInit() {
    
    
  }

  save(Noteid,picker3){
    //console.log("date........",picker3._validSelected);
    let remind = {
      reminder: picker3._validSelected,
      noteIdList: [Noteid],
    }
    //console.log("asdasdasd...",archive);
    
    this.svc.remindernoteservice(remind).subscribe((response:any) => {
      console.log("succcessss.....",response);
      
      this.dataSvc.changeMessage("Hello from Sibling")
    });
  }

}
