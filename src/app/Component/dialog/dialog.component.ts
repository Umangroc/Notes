import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { NoteService } from 'src/app/services/note/note.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteComponent } from '../note/note.component';
import { Dialog } from '../../models/dialog.model';
import { Note } from 'src/app/models/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialog: Dialog;
  response: any;
  result: any;
  noteId: any;
  title = new FormControl;
  description = new FormControl;
  colordialog: any;
  noteData: any;
  noteDetails: any;
  checklistShow: any;
  checklistnoteid: any;
  itemmodel: any;
  item = new FormControl;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private svc: NoteService,
    private dataSvc: DataService,
     public dialogRef: MatDialogRef<NoteComponent>,
     private router: Router) {
    this.colordialog = data.color;
  }

  ngOnInit() {
    this.noteData = this.data.notes;
    console.log("Data of notes...",this.noteData);

    this.dataSvc.currentdialog.subscribe((res:any)=>{
      console.log("res............",res);
      if(res!="default message" && res.id == this.noteData.id){
        //console.log("in");
        
        this.noteData = res;
      }
    })   

    this.dataSvc.currentclosedialog.subscribe((res:any)=>{
      console.log("res............",res);
      if(res=="CLOSE"){
        //console.log("in");
        this.dialogRef.close();
        this.dataSvc.changeclosedialog("OPEN");
      }
    })

    this.dataSvc.currentChecklist.subscribe((res: any) => {
      //console.log("checklist", res);
      if (res.show == "default message") {
        this.checklistShow = false;
      } else {
        this.checklistShow = res.show;
        this.checklistnoteid = res.id;
        //console.log("data...",this.noteData);
        
      }
    })

  }
  
  receiveMessage($event) {
    this.colordialog = $event;
    console.log(this.colordialog);
  }

  openlabel(label){
    this.router.navigate(['/label/'+label]);
    this.dialogRef.close();
  }

  updateData() {
    
    this.dialog = {
      title: this.title.value,
      description: this.description.value,
      noteId: this.noteData.id
    }
    if ((this.dialog.title == null) && (this.noteData.title != null)) {
      this.dialog.title = this.noteData.title;
    }
    if ((this.dialog.description == null) && (this.noteData.description != null)) {
      this.dialog.description = this.noteData.description;
    }

    if ((this.dialog.title == "") && (this.dialog.description == "")) {
      this.dialog.title = "Empty Note";
    }
    //console.log(this.dialog);

    this.svc.updatenoteservice(this.dialog).subscribe((response) => {
      this.dataSvc.changeMessage("Hello from Sibling")
      //console.log(this.response);
    });

    this.dialogRef.close();
  }

  deletereminderfromnotes(deletereminder, noteid) {
    let data = {
      reminder: deletereminder,
      noteIdList: [noteid]
    }
    //console.log("label value.......", data);
    this.svc.deletereminderfromnotesnoteservice(data).subscribe((response: any) => {
      this.getNoteDetails(noteid);
       this.dataSvc.changeMessage("Hello from Sibling")
      console.log(response);
    });
  }

  deletelabelfromnotes(label, noteid) {
    let data = {
      id: label,
      noteId: noteid
    }
    //console.log("label value.......", data);
    this.svc.deletelabelfromnotesnoteservice(data).subscribe((response: any) => {
      this.getNoteDetails(noteid);
     this.dataSvc.changeMessage("Hello from Sibling")
      console.log(response);
    });

  }

  getNoteDetails(noteid){
    this.svc.getnotedetailsnoteservice(noteid).subscribe((res: any) => {
       console.log(res.data.data[0]);
        this.dataSvc.changedialog(res.data.data[0]);
  })
}

addchecklist(noteid){
  let data = {
    status: "open",
    itemName: this.item.value
  }
  this.svc.addchecklistnoteservice(data,noteid).subscribe((response: any) => {
    this.dataSvc.changeMessage("Hello from Sibling");
    this.getNoteDetails(noteid);
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
    this.getNoteDetails(noteid);
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
    this.getNoteDetails(noteid);
    console.log(response);
  });
  
}

}
