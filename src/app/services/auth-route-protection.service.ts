import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthRouteProtectionService implements CanActivate{

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isLoggedIn()
      .then((authenticated: true) => {
        if(authenticated)
          return true;
        else
          this.router.navigate(['/signup']);
      })
  }
}
