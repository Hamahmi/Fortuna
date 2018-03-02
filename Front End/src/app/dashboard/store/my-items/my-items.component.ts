import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MyItemsService } from './my-items.service';
@Component({
  selector: 'app-my-items',
   template: `
   <ng2-smart-table [settings]="settings" [source]="data" (deleteConfirm)="onDeleteConfirm($event)" (createConfirm)="onCreateConfirm($event)" (editConfirm)="onUpdateConfirm($event)"></ng2-smart-table>`
,
  styleUrls: ['./my-items.component.scss'],
  providers:[MyItemsService]
})
export class MyItemsComponent implements OnInit {
  username =window.sessionStorage.username;
  source: LocalDataSource;
  data =[];
  settings = {
    
    delete:{
      confirmDelete:true,
    },
    add:{
      confirmCreate:true,
    },
    edit:{
      confirmSave:true,
    },
    columns: {
      
      
      name: {
        title: 'name',
        filter:String
      },
      price: {
        title: 'price',
        filter:Number},
     
      
      componentNo: {
        title: 'componentNo',
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
  constructor(private MyItemsService:MyItemsService) {this.source =new LocalDataSource(this.data) }

  ngOnInit() {
    this.MyItemsService.getuserProducts(this.username).subscribe(
      (res:any) =>{
        this.data=res.data;
        
      }
      
    );
  }
  onDelete(event){
console.log("delete");

  }
  onDeleteConfirm(event):void{
    console.log(event.data._id); 
    this.MyItemsService.deleteuserProducts(event.data._id).subscribe();
      event.confirm.resolve();
    
  }
  onCreateConfirm(event){
    console.log(event.newData);
    event.confirm.resolve(event.newData);
    this.MyItemsService.createuserProducts(event.newData.name,event.newData.price,this.username,event.newData.componentNo).subscribe();
  }
  onUpdateConfirm(event){
    console.log(event.newData._id);
    event.confirm.resolve();
    this.MyItemsService.updateuserProducts(event.newData._id,event.newData.name,event.newData.price,event.newData.username,event.newData.componentNo).subscribe();
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
