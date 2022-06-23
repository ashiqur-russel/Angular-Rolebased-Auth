import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import  {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    DashboardComponent,
    HeroesComponent,
    HeroeDetailComponent,
    AboutCompanyComponent,
    EmployeeListingComponent,
    EmployeeAddComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
