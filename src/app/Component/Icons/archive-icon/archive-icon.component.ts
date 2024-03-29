import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.scss']
})
export class ArchiveIconComponent implements OnInit {
  @Input() id: any;
  @Output() ArchiveEvent= new EventEmitter<string>();
  constructor(private svc: NoteService, 
    private dataSvc: DataService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  archive(noteId){
    if(noteId){
    let archive = {
      isArchived: true,
      noteIdList: [noteId],
    }
    console.log(archive);
    
    this.svc.archivenoteservice(archive).subscribe((response) => {
      this.openSnackBar('Archived',"Close");
      this.dataSvc.changeMessage("Hello from Sibling")
      this.dataSvc.changeclosedialog("CLOSE");
    },(error)=>{
      this.openSnackBar('Error',"Close");
    })
  }
    else{
      this.ArchiveEvent.emit('true');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
