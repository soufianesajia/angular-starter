import {
  Component,
  OnInit
} from '@angular/core';


import { Title } from './title';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { Chart } from 'chart.js';

import {AuthGuard} from "../_guards/auth.guard";
import { Ng5BreadcrumbModule, BreadcrumbService } from "ng5-breadcrumb";


@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  currentUser: User;
  title : string;


 /**
   * Set our default values
   */
  public localState = { value: '' };

  constructor(private breadcrumbService: BreadcrumbService,
              private userService: UserService,
              private authGuard : AuthGuard,

               ) {

            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


  }

  public ngOnInit() {
    console.log('hello `Home` component');

  }

  public submitState(value: string) {
    console.log('submitState', value);
    //this.appState.set('value', value);
    this.localState.value = '';
    console.log('this.currentUser',this.currentUser);
  }

  public canShowRoute(routeRoles: string[]){
    if (this.authGuard.isCurrentUserHasRole(this.currentUser.roles, routeRoles)) return true;
    return false;
  }

}
