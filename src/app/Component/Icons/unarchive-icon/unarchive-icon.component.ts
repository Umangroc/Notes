import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-unarchive-icon',
  templateUrl: './unarchive-icon.component.html',
  styleUrls: ['./unarchive-icon.component.scss']
})
export class UnarchiveIconComponent implements OnInit {
  @Input() id: any;
  result: any;
  response: any;
  
  constructor(private svc: NoteService, private dataSvc: DataService) { }

  ngOnInit() {
  }

  unarchive(noteId){
    let archive = {
      isArchived: false,
      noteIdList: [noteId],
    }
    this.result = this.svc.archivenoteservice(archive)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(this.response);
    });
  }

}
