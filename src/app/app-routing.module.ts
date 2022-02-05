import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { HomeComponent } from './pages/home/home.component';
import { NewdoctorComponent } from './pages/newdoctor/newdoctor.component';

import { LoginComponent } from './pages/login/login.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'doctor/:id',
    component: DoctorDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'newdoctor',
    component:  NewdoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

