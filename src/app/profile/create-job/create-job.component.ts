import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CompanyService} from "../../services/company.service";
import {JobsService} from "../../services/jobs.service";

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  constructor(private company: CompanyService, private router: Router, private jobs: JobsService) { }
  locations:any[] = [];

  companies:any[] = [];

  addLocations(locationArray:any){
    this.locations = locationArray;
  }

  createJob(formData){
    const {j_c_name, j_title, j_description, j_type, j_req, j_comp} = formData.value;
    let data = {
      company_id: j_c_name,
      title: j_title,
      description: j_description,
      jtype: j_type,
      requirements: j_req,
      compensation: j_comp,
      locations: this.locations
    };

    this.jobs.create(data).subscribe((response) => {
      const newResponse = response.json();
      if(newResponse.status === 'Success'){
        alert(newResponse.message);
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    this.company.fetchAll().subscribe((response) => {
      const newResponse = response.json();
      this.companies = newResponse.data;
    });
  }

}
