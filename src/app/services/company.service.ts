import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }

  createCompany(formData){
    const data = JSON.stringify(formData);
    console.log(formData);
    let headers = new Headers({'Content-type':'application/json', 'x-access-token': window.localStorage.getItem('token')});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/api/company', data, options);
  }

  read(company_id){
    let headers = new Headers({'x-access-token': window.localStorage.getItem('token')});
    return this.http.get('/api/company/'+company_id,{headers: headers});
  }

  fetchAll(){
    let headers = new Headers({'x-access-token': window.localStorage.getItem('token')});
    return this.http.get('/api/company/',{headers: headers});
  }

  update(formData){
    const data = JSON.stringify(formData);
    let headers = new Headers({'Content-Type':'application/json', 'x-access-token': window.localStorage.getItem('token')});
    return this.http.put('/api/company',data, { headers: headers});
  }

  deleteCompany(company_id){
    let headers = new Headers({'x-access-token': window.localStorage.getItem('token')});
    return this.http.delete('/api/company/'+company_id,{headers: headers});
  }
}
