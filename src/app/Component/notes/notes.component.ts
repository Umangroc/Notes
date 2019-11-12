import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { Note } from '../../models/note.model';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() component: any;
  show: boolean = true;
  response: any;
  result: any;
  title = new FormControl;
  description = new FormControl;
  note: Note;
  titlemodel: any;
  descriptionmodel: any;
  color: any = '#fff';
  reminder: any = '';
  remind: any = false;
  email: any;
  checklistShow: any = false;
  item = new FormControl;
  itemmodel: any;
  itemArray = [];
  checklistIndex: any;
  arch = false;
  collabArray = [];
  labelDataArray = [];
  labelIdArray = [];
  labelIndex: any;

  constructor(private svc: NoteService, private dataSvc: DataService) { }

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.dataSvc.currentMessage.subscribe((res: any) => {
      this.email = res;
    })
    this.dataSvc.currentChecklist.subscribe((res: any) => {
      console.log("checklist", res);
      if(!res.id){
        if (res.show == "default message") {
          this.checklistShow = false;
        } else {
          this.checklistShow = res.show;
        }
      }
    })

    this.dataSvc.currentCollaborator.subscribe((res: any) => {
      console.log("Collaborator Data...",res);
      if(res!="default message"){
        this.collabArray.push(res);
      }
      
    })

    this.dataSvc.currentlabel.subscribe((res: any) => {
      console.log("Label Data...",res);
      if(res!="default message"){
        if(res.labelstatus==true){
          this.labelDataArray.push(res.label);
          this.labelIdArray.push(res.label.id);
          console.log("Label Data array...",this.labelDataArray);
          console.log("Label Data Id...",this.labelIdArray);
        }else{
          this.clearlabel(res.label.label)
        }   
    }
    })
  }

  receiveData() {
    this.note = {
      title: this.title.value,
      description: this.description.value,
      color: this.color,
      reminder: this.reminder,
      checklist: JSON.stringify(this.itemArray),
      isArchived: this.arch,
      collaberators: JSON.stringify(this.collabArray),
      labelIdList: JSON.stringify(this.labelIdArray)
    }
    console.log("Note Data.......",this.note);
    
    if (this.title.value == null && this.description.value == null) {
      this.toggle();
    }
    else {
      this.result = this.svc.addnoteservice(this.note)
      this.result.subscribe((response) => {
        this.response = response;
        this.dataSvc.changeMessage("Hello from Sibling")
        console.log(this.response);
      });
      this.titlemodel = '';
      this.descriptionmodel = '';
      this.color = '';
      this.reminder = '';
      this.remind = false;
      this.itemArray = [];
      this.checklistShow = false;
      this.collabArray = [];
      this.toggle();
    }
  }

  receiveMessage($event) {
    this.color = $event;
    //console.log("hell.....",$event);
  }

  receiveReminder($event) {
    this.remind = true;
    this.reminder = $event;
    //console.log("Reminder.....",$event);
  }

  receiveArchive($event) {
    console.log("Archive.....",$event);
    this.arch = $event;
    this.receiveData();
  }

  clear() {
    this.reminder = '';
    this.remind = false;
  }

  listitem(){
    console.log("lenght...",this.itemArray.length);

    this.itemArray[this.itemArray.length]= {itemName: this.item.value,status:"open"};
    this.itemmodel='';
    console.log("Array...",this.itemArray);
  }

  updatestatus(itemname,status){

    this.checklistIndex = this.itemArray.findIndex(i => i.itemName === itemname);
    if(status=='open'){
      this.itemArray[this.checklistIndex].status = 'close';
    }else{
      this.itemArray[this.checklistIndex].status = 'open';
    }
  }

  deletechecklist(itemname){
    this.checklistIndex = this.itemArray.findIndex(i => i.itemName === itemname);
    console.log("index....", this.itemArray.findIndex(i => i.itemName === itemname));
    this.itemArray.splice(this.checklistIndex, 1);
  }

  clearlabel(labelName){
    this.labelIndex = this.labelDataArray.findIndex(i => i.label === labelName);
    // console.log("lebelName....",labelName);
    // console.log("labelIndex....",this.labelIndex);
    this.labelDataArray.splice(this.labelIndex, 1);
    this.labelIdArray.splice(this.labelIndex, 1);
  }

}
