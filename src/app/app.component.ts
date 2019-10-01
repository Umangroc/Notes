import { Component } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private svc:UserService, private http:HttpClient){
    this.svc.print("service working");
  }

  ngOnInit(){
  }
}