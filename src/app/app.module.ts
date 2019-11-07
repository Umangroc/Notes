import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ForgotComponent } from './Component/forgot/forgot.component';
import { ResetComponent } from './Component/reset/reset.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/http/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { NotesComponent } from './Component/notes/notes.component';
import { NotesfooterComponent } from './Component/notesfooter/notesfooter.component';
import { AuthGuard } from './auth/auth.guard';
import { DispComponent} from './Component/disp/disp.component';
import { NoteComponent } from './Component/note/note.component';
import { DialogComponent } from './Component/dialog/dialog.component';
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { ArchiveIconComponent } from './Component/Icons/archive-icon/archive-icon.component';
import { MatmenuIconComponent } from './Component/Icons/matmenu-icon/matmenu-icon.component';
import { UnarchiveIconComponent } from './Component/Icons/unarchive-icon/unarchive-icon.component';
import { ColorIconComponent } from './Component/Icons/color-icon/color-icon.component';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './Component/search/search.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImagedialogComponent } from './Component/imagedialog/imagedialog.component';
import { LabeldialogComponent } from './Component/labeldialog/labeldialog.component';
import { LabeldisplayComponent } from './Component/labeldisplay/labeldisplay.component';
import { RouterModule } from '@angular/router';
import { ReminderIconComponent } from './Component/Icons/reminder-icon/reminder-icon.component';
import { MatNativeDateModule } from '@angular/material';
import { RemindersComponent } from './Component/reminders/reminders.component';
import { CollaboratorsdialogComponent } from './Component/collaboratorsdialog/collaboratorsdialog.component';
import { QuestionComponent } from './Component/question/question.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CartComponent } from './Component/cart/cart.component';
import { ShoppingcartComponent } from './Component/shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    NotesComponent,
    NotesfooterComponent,
    DispComponent,
    NoteComponent,
    DialogComponent,
    TrashComponent,
    ArchiveComponent,
    ArchiveIconComponent,
    MatmenuIconComponent,
    UnarchiveIconComponent,
    ColorIconComponent,
    SearchPipe,
    SearchComponent,
    ImagedialogComponent,
    LabeldialogComponent,
    LabeldisplayComponent,
    ReminderIconComponent,
    RemindersComponent,
    CollaboratorsdialogComponent,
    QuestionComponent,
    CartComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImageCropperModule,
    RouterModule,
    MatNativeDateModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()  
  ],
  entryComponents: [DialogComponent, ImagedialogComponent,LabeldialogComponent,CollaboratorsdialogComponent],
  providers: [ UserService, AuthGuard, MatNativeDateModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }