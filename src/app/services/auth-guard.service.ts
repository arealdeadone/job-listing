import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {CanActivate, Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate():Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isLoggedIn()
      .then((authenticated:boolean) => {
        if(authenticated)
          this.router.navigate(['/profile']);
        else
          return true;
      });
  }
}
