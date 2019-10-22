import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-color-icon',
  templateUrl: './color-icon.component.html',
  styleUrls: ['./color-icon.component.scss']
})
export class ColorIconComponent implements OnInit {
  @Input() id: any;
  @Output() messageEvent= new EventEmitter<string>();
  result: any;
  colorArray: any = [
    {color:'#ECEEEE'}, {color:'#F28B82'}, {color:'#F7BC04'}, {color:'#FAF474'}, 
    {color:'#CBFF90'}, {color:'#AAFEEB'}, {color:'#CBF0F8'},{color: '#ADCBFA'},
    {color:'#D7AEFB'}, {color:'#FDCFE8'}, {color:'#E6C9A8'},{color: '#FFFFFF'}];

  constructor(private svc: NoteService, private dataSvc: DataService) { }

  ngOnInit() {
  }

  changeColor(id,colour){
    if(id){
      let chcolor = {
        color: colour,
        noteIdList: [id],
      }
      console.log(chcolor);
      this.result = this.svc.changecolornoteservice(chcolor)
      this.result.subscribe((response) => {
        this.messageEvent.emit(colour);
        //console.log(this.response);
      });
      this.dataSvc.changeMessage("Hello from Sibling")
      
    }else{
      console.log("Helllosadasds");
      this.messageEvent.emit(colour);
    }
    
    
  }

}
