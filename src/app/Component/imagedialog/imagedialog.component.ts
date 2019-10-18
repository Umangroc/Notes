import { Component, OnInit, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteComponent } from '../note/note.component';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-imagedialog',
  templateUrl: './imagedialog.component.html',
  styleUrls: ['./imagedialog.component.scss']
})
export class ImagedialogComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  
  constructor(public dialogRef: MatDialogRef<NoteComponent>, private dataSvc: DataService,private svc: UserserviceService) { }

  ngOnInit() {
  }
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.file;
      console.log("Cropped Image.........",this.croppedImage);
      
  }

  uploadimage(){
    const fd = new FormData;
    fd.append('file',this.croppedImage);
    this.dialogRef.close();
    
    this.svc.profileimageuserservice(fd).subscribe((response:any) => {
      localStorage.setItem('imageUrl', response.status.imageUrl);   
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log(response);
    });
   
  }

}
