import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'items',
        loadChildren: './items/items.module#ItemsModule'
      },
      {
        path: 'store',
        loadChildren: './store/store.module#StoreModule'
      },
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
