import { Component, OnInit } from '@angular/core';
import * as data from './cities.json';
import {CompanyService} from "../../services/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private company: CompanyService, private router: Router) {
  }

  industries:string [] = [
  'Accommodations',
  'Accounting',
  'Advertising',
  'Aerospace',
  'Agriculture & Agribusiness',
  'Air Transportation',
  'Apparel & Accessories',
  'Auto',
  'Banking',
  'Beauty & Cosmetics',
  'Biotechnology',
  'Chemical',
  'Communications',
  'Computer',
  'Construction',
  'Consulting',
  'Consumer Products',
  'Education',
  'Electronics',
  'Employment',
  'Energy',
  'Entertainment & Recreation',
  'Fashion',
  'Financial Services',
  'Fine Arts',
  'Food & Beverage',
  'Green Technology',
  'Health',
  'Information',
  'Information Technology',
  'Insurance',
  'Journalism & News',
  'Legal Services',
  'Manufacturing',
  'Media & Broadcasting',
  'Medical Devices & Supplies',
  'Motion Pictures & Video',
  'Music',
  'Pharmaceutical',
  'Public Administration',
  'Public Relations',
  'Publishing',
  'Rail',
  'Real Estate',
  'Retail',
  'Service',
  'Sports',
  'Technology',
  'Telecommunications',
  'Tourism',
  'Transportation',
  'Travel',
  'Utilities',
  'Video Game',
  'Web Services'
];
  employees:string[] = ['1-10', '11-50', '51-200', '201-500', '501-1000', '>1000'];
  ngOnInit() {

  }
  locations:any[] = [];

  addLocations(locationArray:any){
    this.locations = locationArray;
  }

  companyCreate(formData){
    let data = {
      c_name: formData.value.c_name,
      c_industry: formData.value.c_industry,
      c_employees: formData.value.c_employees,
      c_locations: this.locations,
    };
    this.company.createCompany(data).subscribe((response) => {
      if(response.json().status === "Success")
      {
        alert(response.json().message);
        this.router.navigate(['/'])
      }
    })
  }
}
