import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {app_routing} from "./app.routing";
import {AuthenticationService} from "./services/authentication.service";
import {ProfileComponent} from "./profile/profile.component";
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { CreateCompanyComponent } from './profile/create-company/create-company.component';
import { JasperoChipsModule } from '@jaspero/ng2-chips';
import { CreateJobComponent } from './profile/create-job/create-job.component';
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthRouteProtectionService} from "./services/auth-route-protection.service";
import {CompanyService} from "./services/company.service";
import {JobsService} from "./services/jobs.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    CreateCompanyComponent,
    CreateJobComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    app_routing,
    JasperoChipsModule
  ],
  providers: [AuthenticationService,AuthGuardService, AuthRouteProtectionService, CompanyService, JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
