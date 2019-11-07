import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.scss']
})
export class DispComponent implements OnInit {
  @Input() display: any;
  @Input() component: any;

  options: any;
  message: String;
  @Input() trash: any;
  dialogcolor: any;
  view: any;

  constructor(private svc: NoteService, private dataSvc: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSvc.currentView.subscribe((res: any) => {
      //console.log("in display", res);
      if(res=="default message"){
this.view = "grid";
      }else{
        this.view = res;
      }
      
    })
    this.display;
  }

  openDialog(notes) {
    this.dialog.open(DialogComponent, {
      data: { title: notes.title, description: notes.description, noteId: notes.id, dialogfunction: this.component, color: notes.color }
    });
  }

  receiveMessage($event) {
    this.message = $event;
  }

  deletelabelfromnotes(label, noteid) {
    let data = {
      id: label,
      noteId: noteid
    }
    //console.log("label value.......", data);
    this.svc.deletelabelfromnotesnoteservice(data).subscribe((response: any) => {
      this.dataSvc.changeMessage("Hello from Sibling")
      //console.log(response);
    });

  }

  deletereminderfromnotes(deletereminder, noteid) {
    let data = {
      reminder: deletereminder,
      noteIdList: [noteid]
    }
    //console.log("label value.......", data);
    this.svc.deletereminderfromnotesnoteservice(data).subscribe((response: any) => {
      this.dataSvc.changeMessage("Hello from Sibling")
      //console.log(response);
    });
  }
}
