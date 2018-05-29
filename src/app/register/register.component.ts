import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {Authentificator} from "../_models/Authentificator";
import {AuthentificatorService} from "../_services/AuthentificatorService";


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    hide = true;

    auhentificators : Authentificator[];

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authentificatorService : AuthentificatorService) {

       this.auhentificators = this.authentificatorService.getAuthentificator();
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
