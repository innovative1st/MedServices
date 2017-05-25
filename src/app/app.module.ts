import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ServerComponent} from './server/server.component';
import { DisplaydetailComponent } from './displaydetail/displaydetail.component';
import {HeaderComponent} from './header/header.component';
import { TopnavComponent } from './topnav/topnav.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient/patientdetails/patientdetails.component';
import { PatientinfoComponent } from './patient/patientdetails/patientinfo/patientinfo.component';
import { DiagnosticComponent } from './patient/patientdetails/diagnostic/diagnostic.component';
import { DiagnosticlistComponent } from './patient/patientdetails/diagnostic/diagnosticlist/diagnosticlist.component';
import { DiagnosticdetailComponent } from './patient/patientdetails/diagnostic/diagnosticdetail/diagnosticdetail.component';
import { LandingComponent } from './landing/landing.component';
import { GuestComponent } from './guest/guest.component';
import { ServicesComponent } from './guest/services/services.component';
import { PriceComponent } from './guest/price/price.component';
import { IntroComponent } from './guest/intro/intro.component';
import { UserComponent } from './user/user.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { SearchComponent } from './user/search/search.component';
import { MyappointmentsComponent } from './user/myappointments/myappointments.component';
import { NewpatientComponent } from './patient/newpatient/newpatient.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopnavComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientinfoComponent,
    DiagnosticComponent,
    DiagnosticlistComponent,
    DiagnosticdetailComponent,
    LandingComponent,
    GuestComponent,
    ServicesComponent,
    PriceComponent,
    IntroComponent,
    UserComponent,
    MyprofileComponent,
    SearchComponent,
    MyappointmentsComponent,
    NewpatientComponent
   // MyComponentComponent,
    //ServerComponent,
   // DisplaydetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
