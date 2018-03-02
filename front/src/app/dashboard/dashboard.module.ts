import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
