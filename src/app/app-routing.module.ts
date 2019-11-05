import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ForgotComponent } from './Component/forgot/forgot.component';
import { ResetComponent } from './Component/reset/reset.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

import { NoteComponent } from './Component/note/note.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { TrashComponent } from './Component/trash/trash.component';
import { SearchComponent } from './Component/search/search.component';
import { LabeldisplayComponent } from './Component/labeldisplay/labeldisplay.component';
import { RemindersComponent } from './Component/reminders/reminders.component';
import { QuestionComponent } from './Component/question/question.component';
import { CartComponent } from './Component/cart/cart.component';


const routes: Routes = [

  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'resetpassword/:id', component: ResetComponent },
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'note', component: NoteComponent },
      { path: 'reminders', component: RemindersComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'search', component: SearchComponent },
      { path: 'label/:labelname', component: LabeldisplayComponent },
      { path: 'question/:id', component: QuestionComponent}
    ]
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
