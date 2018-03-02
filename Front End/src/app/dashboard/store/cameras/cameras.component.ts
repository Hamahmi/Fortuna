import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { CamerasService } from './cameras.service';

@Component({
  selector: 'app-cameras',
  template: `
  <ng2-smart-table [settings]="settings" [source]="data" (deleteConfirm)="onDeleteConfirm($event)" (createConfirm)="onCreateConfirm($event)" (editConfirm)="onUpdateConfirm($event)"></ng2-smart-table>`,
  styleUrls: ['./cameras.component.scss'],
  providers:[CamerasService]
})
export class CamerasComponent implements OnInit {
  source: LocalDataSource;
  data =[];
  settings = {
    actions:false,
    
    columns: {
      
      
      name: {
        title: 'name',
        filter:String
      },
      price: {
        title: 'price',
        filter:Number},
     
      
      componentNo: {
        title: 'Number',
        filter:false
      },
      createdAt: {
        title: 'createdAt',
        filter:false},
        updatedAt: {
          title: 'updatedAt',
          filter:false}
    }
  };
  constructor(private camerasService:CamerasService) {this.source =new LocalDataSource(this.data) }

  ngOnInit() {
    this.camerasService.getuserProducts(2).subscribe(
      (res:any) =>{
        this.data=res.data;
        
      }
      
    );
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'name',
        search: query
      },
      {
        field: 'price',
        search: query
      },
      
      {
        field: 'componentNo',
        search: query
      },
      {
        field: 'createdAt',
        search: query
      },
      {
        field: 'updatedAt',
        search: query
      }
    ], false); 
    
  }

}
