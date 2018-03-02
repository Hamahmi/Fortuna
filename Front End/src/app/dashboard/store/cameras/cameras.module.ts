import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  declarations: [CamerasComponent,HttpClient]
})
export class CamerasModule { }
