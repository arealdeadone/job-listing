import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {JobsService} from "../../services/jobs.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private company: CompanyService, private job: JobsService) { }

  companies:any[] = [];
  jobs:any[] = [];

  ngOnInit() {
    this.company.fetchAll().subscribe((response) => {
      let newResponse = response.json();
      this.companies = newResponse.data;
    });
    this.job.fetchAll().subscribe((response) => {
      let newResponse = response.json();
      this.jobs = newResponse.data;
    })
  }

}
