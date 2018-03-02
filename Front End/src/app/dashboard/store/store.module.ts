import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ThemeModule } from '../../@theme/theme.module';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    ThemeModule
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }
