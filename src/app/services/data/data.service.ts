import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
}

private viewSource = new BehaviorSubject('default message');
currentView = this.viewSource.asObservable();

changeView(message: string) {
  this.viewSource.next(message)
}

private questionSource = new BehaviorSubject('default message');
currentQuestion = this.questionSource.asObservable();

changeQuestion(message: string) {
  this.questionSource.next(message)
}

private typeSource = new BehaviorSubject('default message');
currentType = this.typeSource.asObservable();

changeType(message: string) {
  this.typeSource.next(message)
}

// Checklist
private checklistSource = new BehaviorSubject('default message');
currentChecklist = this.checklistSource.asObservable();

changeChecklist(message: any) {
  this.checklistSource.next(message)
}

// Collaborator
private collaboratorSource = new BehaviorSubject('default message');
currentCollaborator = this.collaboratorSource.asObservable();

changeCollaborator(message: any) {
  this.collaboratorSource.next(message)
}

// Labels
private labelSource = new BehaviorSubject('default message');
currentlabel = this.labelSource.asObservable();

changelabel(message: any) {
  this.labelSource.next(message)
}

// Dialog Reminder
private dialogSource = new BehaviorSubject('default message');
currentdialog = this.dialogSource.asObservable();

changedialog(message: any) {
  this.dialogSource.next(message)
}
}