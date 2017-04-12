/**
 * Created by ARVIND on 4/12/2017.
 */

import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";

const APP_ROUTES:Routes = [
  {path: '', component: SignupComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
