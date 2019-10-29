import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../http/user.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private svc: UserService) { }

  addnoteservice(Obj){
    let url= 'notes/addNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  displaynoteservice(){
    let url= 'notes/getNotesList'
    let auth = true;
    return this.svc.get(url,auth);
  }

  archivedisplaynoteservice(){
    let url= 'notes/getArchiveNotesList'
    let auth = true;
    return this.svc.get(url,auth);
  }

  trashdisplaynoteservice(){
    let url= 'notes/getTrashNotesList'
    let auth = true;
    return this.svc.get(url,auth);
  }

  updatenoteservice(Obj){
    let url= 'notes/updateNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  deleteforevernoteservice(Obj){
    let url= 'notes/deleteForeverNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  trashnoteservice(Obj){
    let url= 'notes/trashNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  changecolornoteservice(Obj){
    let url= 'notes/changesColorNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  archivenoteservice(Obj){
    let url= 'notes/archiveNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  addlabelnoteservice(Obj){
    let url= 'noteLabels'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  getlabellistnoteservice(){
    let url= 'noteLabels/getNoteLabelList'
    let auth = true;
    return this.svc.get(url,auth);
  }

  deletelabelnoteservice(Obj){
    let url= 'noteLabels/'+ Obj.id + '/deleteNoteLabel'
    return this.svc.delete(url);
  }

  updatelabelnoteservice(Obj){
    let url= 'noteLabels/' + Obj.id + '/updateNoteLabel'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  addlabeltonotesnoteservice(Obj){
    let url= 'notes/' + Obj.noteId + '/addLabelToNotes/' + Obj.id + '/add'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  deletelabelfromnotesnoteservice(Obj){
    let url= 'notes/' + Obj.noteId + '/addLabelToNotes/' + Obj.id + '/remove'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  labeldisplaynoteservice(Obj){
    let url= 'notes/getNotesListByLabel/' + Obj.labelName
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  remindernoteservice(Obj){
    let url= 'notes/addUpdateReminderNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  deletereminderfromnotesnoteservice(Obj){
    let url= 'notes/removeReminderNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  reminderdisplaynoteservice(){
    let url= 'notes/getReminderNotesList'
    let auth = true;
    return this.svc.get(url,auth);
  }

  userlistnoteservice(Obj){
    let url= 'user/searchUserList'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  addcollaboratornoteservice(Obj,id){
    let url= 'notes/' + id + '/AddcollaboratorsNotes'
    let auth = true;
    return this.svc.post(Obj,url,auth);
  }

  deletecollaboratorfromnotesnoteservice(userId,id){
    let url= 'notes/' + id + '/removeCollaboratorsNotes/' + userId;
    return this.svc.delete(url);
  }

  getnotedetailsnoteservice(id){
    let url = 'notes/getNotesDetail/' + id
    let auth = true;
    return this.svc.get(url,auth);
  }

  askquestionnoteservice(data){
    let url = 'questionAndAnswerNotes/addQuestionAndAnswer'
    let auth = true;
    return this.svc.post(data,url,auth);
  }

}
