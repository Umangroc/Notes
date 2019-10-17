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


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'resetpassword/:token', component: ResetComponent },
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'note', component: NoteComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'search', component: SearchComponent }
    ]
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
