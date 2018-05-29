
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from 'app/_models';
import {UserService} from "../_services/user.service";
import {HttpClient} from "@angular/common/http";
import {NgxPermissionsService, NgxRolesService} from "ngx-permissions";
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  moduleId: 'admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {


  currentUser: User;

  users: User[] = [];

  constructor(private userService: UserService,private http: HttpClient,
              private permissionsService: NgxPermissionsService,
              private roleService : NgxRolesService,
              private authenticationService : AuthenticationService
              ) {
    this.currentUser = authenticationService.getLoggedInUser();
  }

  ngOnInit() {


    var roles : string[] = this.currentUser.roles;
    this.roleService.addRole(roles[0],roles);

    this.loadAllUsers();

  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }



}
