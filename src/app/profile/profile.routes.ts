import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateCompanyComponent} from "./create-company/create-company.component";
import {CreateJobComponent} from "./create-job/create-job.component";
/**
 * Created by ARVIND on 4/23/2017.
 */

const PROFILE_ROUTES:Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create-company', component: CreateCompanyComponent },
  { path: 'post-job', component: CreateJobComponent }
];

export default PROFILE_ROUTES;
