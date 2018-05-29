import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { Authentificator} from "../_models/Authentificator";
import { AuthentificatorService } from "../_services/AuthentificatorService";

@Component({
    moduleId: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    hide = true;

    auhentificators : Authentificator[];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private authentificatorService : AuthentificatorService
        ) {

       this.auhentificators = this.authentificatorService.getAuthentificator();
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout(this.route.snapshot);
        if(this.authenticationService.getLoggedInUser()) this.router.navigate(['']);

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password, this.model.authentificator)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
