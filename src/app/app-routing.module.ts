import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AllstudentpageComponent } from './allstudentpage/allstudentpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { authenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[authenticationGuard], children:[
    {path:'home',component:HomeComponent},
    {path: 'createstudent',component:CreatestudentComponent},
    {path:'allstudentpage',component:AllstudentpageComponent}
  ]},
  {path:"", component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
