import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  settings = {
    columns: {
      name: {
        title: 'Product Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created at'
      },
      updatedAt: {
        title: 'Updated at'
      },
      username: {
        title: 'Seller Name'
      },
      componentNo: {
        title: 'component'
      }
    },
    actions:{
      edit:false,
      delete:false
    }
  };

  products;

  constructor(private storeService: StoreService) { 
  }
  
  ngOnInit() {
    this.storeService.products().subscribe(
        (res:any)=>{ 
          this.products = res.data;
        }
    )
}
}