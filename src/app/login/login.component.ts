import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router: Router) { }

  buttonText:string = "Login";
  isDisabled:boolean = false;

  login(f){
    this.isDisabled = true;
    this.buttonText = "Please Wait";
    this.authService.login(f.value).subscribe((response) => {
      response = response.json();
      if(response['token']) {
        window.localStorage.setItem('token',response['token']);
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit() {
  }

}
