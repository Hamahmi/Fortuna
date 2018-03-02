import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStoreComponent } from './main-store.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [MainStoreComponent,HttpClient]
})
export class MainStoreModule { }
