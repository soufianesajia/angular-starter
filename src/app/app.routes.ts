import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { AuthGuard } from './_guards/index';
import { DashboardComponent} from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin/admin.component";
import { NgxPermissionsGuard } from "ngx-permissions";

export const ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LoginComponent },

  { path: 'barrel',
    loadChildren: './+barrel#BarrelModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: ["ADMINa"]
    },

  },

  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: { roles: ["ADMIN"] },
    canActivateChild: [AuthGuard],
    children: [

      { path: 'admin',
        component: AdminComponent,
        data: { roles: ["ADMIN"] },
      },

      { path: 'about',
        component: AboutComponent,
        data: { roles: ["ADMIN"] },
      },

      { path: 'detail', loadChildren: './+detail#DetailModule' , data: { roles: ["ADMIN"] },},

      { path: 'dashborad',
        component: DashboardComponent ,
        data: { roles: ["ADMIN"] },
      },



    ]
  },

  { path: '**',    component: NoContentComponent, canActivate: [AuthGuard], data: { roles: [""] } },
];


