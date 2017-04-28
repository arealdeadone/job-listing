import { Component, OnInit } from '@angular/core';
import {User} from "../services/user.model";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }
  user:User;
  ngOnInit() {
    this.auth.setUserData();
    this.user = this.auth.getUserData();
  }

}
