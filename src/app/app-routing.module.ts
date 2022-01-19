/*
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';


//Add a hero detail route starts here
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
//Add a hero detail route ends here


//Add the dashboard route starts here
import { DashboardComponent } from './dashboard/dashboard.component';
//Add the dashboard route ends here


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },


  //Add the dashboard route starts here
  { path: 'dashboard', component: DashboardComponent },
  //Add the dashboard route ends here


  //Add a default route starts here
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //Add a default route ends here


  //Add a hero detail route starts here
  { path: 'detail/:id', component: HeroDetailComponent },
  //Add a hero detail route ends here

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }