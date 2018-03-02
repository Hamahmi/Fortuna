import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ThemeModule } from '../../@theme/theme.module';
import { StoreRoutingModule } from './store-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    ThemeModule,
    Ng2SmartTableModule
  ],
  declarations: [StoreComponent],
  providers: [StoreService]
})
export class StoreModule { }
