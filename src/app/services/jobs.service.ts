import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class JobsService {

  constructor(private http: Http) { }

  create(value){
    const data = JSON.stringify(value);
    let headers = new Headers({'Content-Type': 'application/json', 'x-access-token': window.localStorage.getItem('token')});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/api/jobs', data, options);
  }

  fetchAll(){
    let headers = new Headers({'x-access-token': window.localStorage.getItem('token')});
    let options = new RequestOptions({headers: headers});
    return this.http.get('/api/jobs', options);
  }

}
