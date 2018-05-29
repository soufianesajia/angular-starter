import { Injectable } from '@angular/core';
import {
  Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route,
  CanActivateChild,
} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {User} from "../_models/user";
import {AuthenticationService} from "../_services/authentication.service";
import {ifTrue} from "codelyzer/util/function";


@Injectable()
export class AuthGuard implements CanActivate, CanLoad , CanActivateChild {


  private currentUser: User;

  constructor(private router: Router, private authenticationService : AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        this.currentUser = this.authenticationService.getLoggedInUser();

        if(!this.currentUser){ this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }}) ; return false;}

        if(this.isCurrentUserHasRole(this.currentUser.roles,route.data['roles'])) return true;

        return false;

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute,state);
    }

    canLoad(route: Route): boolean {
      console.log("trying can load for ",route.path);

      this.currentUser = this.authenticationService.getLoggedInUser();

      if(!this.currentUser) this.router.navigate(['/login']);

      if (this.currentUser
        && route.data
        && route.data['roles']) {

        if(this.isCurrentUserHasRole(this.currentUser.roles,route.data['roles'])) return true;

        return false;
      }

      return false;
    }

    isCurrentUserHasRole(currentUserRoles: string [], routeRoles : string []): boolean{
      let found = currentUserRoles.some(r=> routeRoles.indexOf(r) >= 0);
      if(found) return true;
      //console.error("can't load it ");
      return false;
    }

}
