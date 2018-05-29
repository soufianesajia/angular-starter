import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { appConfig } from '../app.config';
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {User} from "../_models/user";

@Injectable()
export class AuthenticationService {

    currentUser : User;

    constructor(private http: HttpClient,private router: Router) { }

    login(username: string, password: string , authentificator : string) {
        return this.http.post<any>(appConfig.apiUrl + '/users/authenticate',
          { username: username, password: password , authentificator : authentificator })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                  // store user details and jwt token in local storage
                  // to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout(route: ActivatedRouteSnapshot) {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getLoggedInUser(): User {
      if(localStorage.getItem('currentUser')){
        var localStorageCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.currentUser = new User(
          localStorageCurrentUser["_id"],
          localStorageCurrentUser["username"],
          localStorageCurrentUser["authentificator"],
          localStorageCurrentUser["fistName"],
          localStorageCurrentUser["lastName"],
          localStorageCurrentUser["fullName"],
          localStorageCurrentUser["email"],
          localStorageCurrentUser["roles"],
          )

          return this.currentUser;
      }else{
        return null;
      }

    }



}
