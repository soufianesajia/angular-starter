import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AboutComponent } from './about';
import { DashboardComponent } from './dashboard';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { DevModuleModule } from './+dev-module';
import { CdkTableModule } from '@angular/cdk/table';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { RegisterComponent } from './register/index';

import { NgxPermissionsModule, NgxPermissionsService} from 'ngx-permissions';

import { ChartModule } from 'angular2-highcharts';

import { AmazingTimePickerModule } from 'amazing-time-picker';

import { PieChartComponent } from './dashboard/charts/piechart.component';
import { ComboChartComponent } from './dashboard/charts/combochart.component';

import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { MaterialModule } from './material.module';
import 'highcharts-export-csv';
import 'hammerjs';

import '../styles/styles.scss';
import '../styles/headings.css';
import {DetailComponent} from "./+detail/detail.component";
import {GoogleComboChartService} from "./_services/GoogleComboChart.service";
import {GooglePieChartService} from "./_services/GooglePieChartService";
import {ElementService} from "./_services/ElementService";
import {AuthentificatorService} from 'app/_services/AuthentificatorService';
import {AdminComponent} from "./admin/admin.component";
import {ColumnChartComponent} from "./dashboard/charts/columnChart.component";
import {CalendarComponent} from './dashboard/charts/calendar.component';
import {GoogleColumnChartService} from "./_services/GoogleColumnChartService";
import {GoogleCalendarChartService} from "./_services/GoogleCalendarChartService";
import {AreaChartComponent} from "./dashboard/charts/areaChart.component";
import {GoogleAreaChartService} from "./_services/GoogleAreaChartService";


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

const Highcharts = require('highcharts');

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DashboardComponent,
    AlertComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    NoContentComponent,
    XLargeDirective,
    PieChartComponent,
    ComboChartComponent,
    ColumnChartComponent,
    AreaChartComponent,
    CalendarComponent,
    AdminComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng5BreadcrumbModule.forRoot(),
    AmazingTimePickerModule,
    ChartModule.forRoot(
      //Highcharts,
      require('highcharts'),
      //require('highcharts/highcharts-3d'),
      //require('highcharts/modules/export-csv'),
      require('highcharts/modules/exporting'),
      //require('highcharts/highmaps')

    ),
    NgxPermissionsModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [ DevModuleModule ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
    GoogleComboChartService,
    GooglePieChartService,
    GoogleColumnChartService,
    GoogleCalendarChartService,
    GoogleAreaChartService,
    ElementService,
    AuthentificatorService,
    NgxPermissionsService
  ]
})
export class AppModule {}
