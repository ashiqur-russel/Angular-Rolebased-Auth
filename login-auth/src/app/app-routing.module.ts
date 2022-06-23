import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroeDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent,
        children:[
          {path:'company',component:AboutCompanyComponent}
        ] },
  { path: 'employee', component: EmployeeComponent,
        children:[
          {path:'',component:EmployeeListingComponent},
          {path:'edit/:id',component:EmployeeAddComponent}
        ] },
  
  { path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}