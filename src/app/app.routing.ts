/**
 * Created by ARVIND on 4/12/2017.
 */

import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./profile/dashboard/dashboard.component";
import {CreateCompanyComponent} from "./profile/create-company/create-company.component";
import {CreateJobComponent} from "./profile/create-job/create-job.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthRouteProtectionService} from "./services/auth-route-protection.service";

const APP_ROUTES:Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthRouteProtectionService], children: [
    { path: '', component: DashboardComponent },
    { path: 'create-company', component: CreateCompanyComponent },
    { path: 'post-job', component: CreateJobComponent }
  ]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
