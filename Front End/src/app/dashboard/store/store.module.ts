import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';


@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [StoreComponent],
  providers:[StoreService]
})
export class StoreModule { }
