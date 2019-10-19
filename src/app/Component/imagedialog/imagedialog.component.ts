import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { DataService } from 'src/app/services/data/data.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormControl } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-imagedialog',
  templateUrl: './imagedialog.component.html',
  styleUrls: ['./imagedialog.component.scss']
})
export class ImagedialogComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  
  constructor(public dialogRef: MatDialogRef<DashboardComponent>, private dataSvc: DataService,private svc: UserserviceService) { }

  ngOnInit() {
  }
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.file;
      //console.log("Cropped Image.........",this.croppedImage);
  }

  uploadimage(){
    const fd = new FormData;
    fd.append('file',this.croppedImage);
    this.close();
    
    this.svc.profileimageuserservice(fd).subscribe((response:any) => {
      localStorage.setItem('imageUrl', response.status.imageUrl);   
      this.dataSvc.changeMessage("Hello from Sibling")
      console.log("Image Url while uploading ...",response.status.imageUrl);
    });
   
  }

  close(){
    this.dialogRef.close();
  }

}
