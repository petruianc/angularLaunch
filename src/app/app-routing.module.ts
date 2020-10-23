import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirststageComponent } from './firststage/firststage.component';
import {LaunchesComponent} from './launches/launches.component';
import { LinksComponent } from './links/links.component';
import { RocketComponent } from './rocket/rocket.component';


const routes: Routes = [
 { 
   path: 'launches',
  component: LaunchesComponent
 },
 {
   path: 'rocket/:flight_number',
   component: RocketComponent
 },
 {
   path:'links',
   component:LinksComponent
 },
 {
   path:'firststage/:flight_number',
   component: FirststageComponent
 },
 {
   path:'links/:flight_number',
   component: LinksComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
