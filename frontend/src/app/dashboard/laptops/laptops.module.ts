import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LaptopsService} from './laptops.service';
import { LaptopsRoutingModule } from './laptops-routing.module';
import {LaptopsComponent} from './laptops.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    LaptopsRoutingModule,Ng2SmartTableModule
  ],
  declarations: [LaptopsComponent],
  providers:[LaptopsService]
})
export class LaptopsModule { 
  
}
