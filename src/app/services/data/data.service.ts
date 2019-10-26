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
}