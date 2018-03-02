import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsComponent } from './my-items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MyItemsService } from './my-items.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [MyItemsComponent],
  providers:[MyItemsService,HttpClient]
})
export class MyItemsModule { }
