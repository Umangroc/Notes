import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-matmenu-icon',
  templateUrl: './matmenu-icon.component.html',
  styleUrls: ['./matmenu-icon.component.scss']
})
export class MatmenuIconComponent implements OnInit {
  @Input() id: any;
  @Input() mat: any;
  labels: any;
  changed : any = false;

  constructor(private svc: NoteService,
     private dataSvc: DataService,
     private router: Router,
     private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getlabellist();
  }

  trash(noteId) {
    let trash = {
      isDeleted: true,
      noteIdList: [noteId],
    }
    this.svc.trashnoteservice(trash).subscribe((response) => {
      this.dataSvc.changeMessage("Hello from Sibling")
      this.openSnackBar('Deleted',"Close");
      //console.log(this.response);
    },(error)=>{
      this.openSnackBar('Error',"Close");
    });
  }

  deleteforever(noteId) {
    console.log(noteId);

    let delfor = {
      isDeleted: true,
      noteIdList: [noteId],
    }
    this.svc.deleteforevernoteservice(delfor).subscribe((response) => {
      this.dataSvc.changeMessage("Hello from Sibling")
      this.openSnackBar('Deleted permanently',"Close");
      //console.log(response);
    },(error)=>{
      this.openSnackBar('Error',"Close");
    })
  }

  restore(noteId) {

    let delfor = {
      isDeleted: false,
      noteIdList: [noteId],
    }
 this.svc.trashnoteservice(delfor).subscribe((response) => {
      this.openSnackBar('Restored',"Close");
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(response);
    },(error)=>{
      this.openSnackBar('Error',"Close");
    })
  }

  getlabellist() {
    this.svc.getlabellistnoteservice().subscribe((response: any) => {
      this.labels = response.data.details.reverse();
      // console.log(response);
      // console.log("labelsss........", response.data.details);
    });
  }

  addlabeltonotes(label, noteid) {
    let data = {
      id: label.id,
      noteId: noteid
    }
    console.log("label value.......", data);
    this.svc.addlabeltonotesnoteservice(data).subscribe((response: any) => {
      this.dataSvc.changeMessage("Hello from Sibling")
      this.changed = true;
      console.log(response);
    });

  }

  question(id){
    this.dataSvc.changeMessage(id);
    this.router.navigate(['/question/' + id]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
