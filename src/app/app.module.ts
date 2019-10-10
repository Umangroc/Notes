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
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent],
  providers: [ UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }