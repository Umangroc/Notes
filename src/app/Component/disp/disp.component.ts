import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.scss']
})
export class DispComponent implements OnInit {
  @Input() display: any;
  @Input() component: any;
  item = new FormControl;
  options: any;
  message: String;
  @Input() trash: any;
  dialogcolor: any;
  view: any;
  checklistShow: any;
  checklistnoteid: any;
  itemmodel: any;
  notedetails: any;

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

    this.dataSvc.currentChecklist.subscribe((res: any) => {
      console.log("checklist", res);
      if (res.show == "default message") {
        this.checklistShow = false;
      } else {
        this.checklistShow = res.show;
        this.checklistnoteid = res.id;
      }
    })

    this.dataSvc.currentMessage.subscribe((res: any) => {
      console.log("res......",res);         
    })
    this.display;
  }

  openDialog(notes) {
    console.log("color in opendialog function....",notes);
    
    this.dialog.open(DialogComponent, {
      data: { 
        dialogfunction: this.component, 
        color: notes.color,
        notes: notes
       }, width: '598px'
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

  addchecklist(noteid){
    let data = {
      status: "open",
      itemName: this.item.value
    }
    this.svc.addchecklistnoteservice(data,noteid).subscribe((response: any) => {
      this.dataSvc.changeMessage("Hello from Sibling");
      this.itemmodel = '';
      console.log(response);
    });

  }

  deletechecklist(noteid,checklistid){
    let data = {
      noteId: noteid,
      checklistId: checklistid
    }
    this.svc.deletechecklistnoteservice(data).subscribe((response: any) => {
      this.dataSvc.changeMessage("Hello from Sibling");
      console.log(response);
    });
  }

  updatestatus(itemname,status,noteid,checklistid){
    let data;
    if(status=='open'){
       data = {
        status: "close",
        itemName: itemname,
        noteId: noteid,
      checklistId: checklistid
      }
    }else{
       data = {
        status: "open",
        itemName: itemname,
        noteId: noteid,
      checklistId: checklistid
      }
    }
    this.svc.updatechecklistnoteservice(data).subscribe((response: any) => {
      this.dataSvc.changeMessage("Hello from Sibling");
      console.log(response);
    });
    
  }
}
