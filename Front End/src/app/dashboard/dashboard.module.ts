import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { BestPurchaseComponent } from './best-purchase/best-purchase.component';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent, BestPurchaseComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {
}
