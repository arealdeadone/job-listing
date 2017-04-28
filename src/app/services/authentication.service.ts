import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {User} from "./user.model";

declare var jwt_decode;

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  user:User;

  login(user:any){
    let data:any = {
      username: user.email,
      password: user.password
    };
    data = JSON.stringify(data);
    let headers:Headers;
    if(window.localStorage.getItem('token'))
    {
      headers = new Headers({'Content-type': 'application/json', 'x-access-token': window.localStorage.getItem('token')});
    }
    else
      headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/auth/login', data, options);
  }

  signup(user:any){
    let data:any = {
      name: user.fullname,
      username: user.username,
      email: user.email,
      password: user.password
    };
    data = JSON.stringify(data);
    console.log(data);
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/auth/signup', data, options);
  }

  setUserData(){
    let tokenget = window.localStorage.getItem('token');
    let token:any = jwt_decode(tokenget);
    this.user = new User(token.user_id, token.username, token.email);
  }

  getUserData(){
    return this.user;
  }

  isLoggedIn(){
    const promise = new Promise(
      (resolve,reject) => {
        resolve(!!window.localStorage.getItem('token'));
      }
    );
    return promise;
  }
  isLoggedInBool(){
    return !!window.localStorage.getItem('token');
  }

  logout(){
    window.localStorage.removeItem('token');
  }
}
