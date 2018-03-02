import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MainStoreService} from './main-store.service';


@Component({
  selector: 'app-main-store',
  template:`
  <ng2-smart-table [settings]="settings" [source]="data" (deleteConfirm)="onDeleteConfirm($event)" (createConfirm)="onCreateConfirm($event)" (editConfirm)="onUpdateConfirm($event)" (custom)="buy($event)"></ng2-smart-table>`,
  styleUrls: ['./main-store.component.scss'],
  providers:[MainStoreService]
})
export class MainStoreComponent implements OnInit {
  source: LocalDataSource;
  data =[];
  settings = {
    actions: {
      edit:false,
      delete:false, //as an example
      add:false,
      custom: [{ name: 'Buy', title: 'buy' }]
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
        filter:Number
      },
      createdAt: {
        title: 'createdAt',
        filter:false},
        updatedAt: {
          title: 'updatedAt',
          filter:false}
    }
  };
  constructor(private mainstoreService:MainStoreService) { }

  ngOnInit() {
    this.mainstoreService.getuserProducts().subscribe(
      (res:any) =>{
        this.data=res.data;
        
      }
      
    );
  }
  buy(event){
    console.log(event.data);
    window.sessionStorage.cart.push(event.data);
  }

}
