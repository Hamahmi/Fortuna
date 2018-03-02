import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MainStoreComponent } from './store/main-store/main-store.component';
import { MyItemsComponent } from './store/my-items/my-items.component';
import { CamerasComponent } from './store/cameras/cameras.component';


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
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path:'store',
        children:[{
          path:'main',
          component:MainStoreComponent
          
        },
        {
          path:'myitems',
          component:MyItemsComponent
          
        },
        {
          path:'cameras',
          component:CamerasComponent
          
        }]        
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'signup',
        loadChildren: './signup/signup.module#SignupModule'
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

