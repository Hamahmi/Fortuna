import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopsComponent } from './laptops.component';

const routes: Routes = [
  {path:'', component:LaptopsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaptopsRoutingModule {

 }
