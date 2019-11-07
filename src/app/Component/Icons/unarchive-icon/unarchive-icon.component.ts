import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-unarchive-icon',
  templateUrl: './unarchive-icon.component.html',
  styleUrls: ['./unarchive-icon.component.scss']
})
export class UnarchiveIconComponent implements OnInit {
  @Input() id: any;
  
  constructor(private svc: NoteService, 
    private dataSvc: DataService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  unarchive(noteId){
    let archive = {
      isArchived: false,
      noteIdList: [noteId],
    }
    this.svc.archivenoteservice(archive).subscribe((response) => {
      this.openSnackBar('Unarchived',"Close");
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(response);
    },(error)=>{
      this.openSnackBar('Error',"Close");
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
