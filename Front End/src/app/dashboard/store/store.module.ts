import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ThemeModule } from '../../@theme/theme.module';
import { StoreRoutingModule } from './store-routing.module';
import { MyItemsComponent } from './my-items/my-items.component';
import { MainStoreComponent } from './main-store/main-store.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    ThemeModule
  ],
  declarations: [StoreComponent,MyItemsComponent,MainStoreComponent]
})
export class StoreModule { }
