import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText: any;
  email = localStorage.getItem('email');   
  name = localStorage.getItem('name');    
  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
      
  }

  logout(){
    localStorage.clear();
  }

  search(){    
    this.dataSvc.changeMessage(this.searchText);
  }
  
}

