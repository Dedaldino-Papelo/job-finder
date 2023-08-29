import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome"

import { faPlus, 
        faEnvelope, 
        faPrint, 
        faLocationDot,
        faBriefcase,
        faHandshakeSimple,
        faSackDollar
} from '@fortawesome/free-solid-svg-icons';

import { HttpClientModule } from '@angular/common/http'
import {  FormsModule, ReactiveFormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDetailsComponent } from './components/pages/job-details/job-details.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    JobsComponent,
    JobDetailsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, 
                    faEnvelope, 
                    faPrint, 
                    faLocationDot,
                    faBriefcase,
                    faHandshakeSimple,
                    faSackDollar )
  }
}
