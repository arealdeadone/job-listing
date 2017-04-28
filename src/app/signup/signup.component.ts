import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  signup(formData){
    this.authService.signup(formData.value).subscribe(response => {
      response = response.json();
      console.log(response);
    })
  }

  ngOnInit() {
  }

}
