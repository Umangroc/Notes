import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.scss']
})
export class ArchiveIconComponent implements OnInit {
  @Input() id: any;
  result: any;
  response: any;

  constructor(private svc: NoteService, private dataSvc: DataService) { }

  ngOnInit() {
  }
  archive(noteId){
    let archive = {
      isArchived: true,
      noteIdList: [noteId],
    }
    console.log(archive);
    
    this.result = this.svc.archivenoteservice(archive)
    this.result.subscribe((response) => {
      this.response = response;
      this.dataSvc.changeMessage("Hello from Sibling")
    });
  }

}
