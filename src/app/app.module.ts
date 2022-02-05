import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { BtnLoadingComponent } from './components/btn-loading/btn-loading.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { NewdoctorComponent } from './pages/newdoctor/newdoctor.component';
import { SigninComponent } from './components/signin/signin.component';
import { RateComponent } from './components/rate/rate.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NavbarComponent,
    ProfileComponent,
    BtnLoadingComponent,
    DoctorDetailsComponent,
    LoginComponent,
    HomeComponent,
    AddDoctorComponent,
    NewdoctorComponent,
    SigninComponent,
    RateComponent
  

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,FormsModule, NgbModule,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
    library.addIcons(faSpinner);
  } }
  