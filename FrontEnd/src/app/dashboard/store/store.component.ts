import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {

  products;

  constructor(private storeService: StoreService) { }
  settings = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      name: {
        title: 'Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      },
      updatedAt: {
        title: 'Updated At'
      },
      username:{
        title: 'Username'
      },
      componentNo:{
        title: 'Component Number'
      }
    }
  };

  ngOnInit() {
    this.storeService.getProductsByUsername("nourhanashraf").subscribe(
       (res: any) => {
          this.products= res.data; 
       }
    )
  }

  createNewRecord(event) {
    var data = {"name" : event.newData.name,
                "price" : event.newData.price,
                "username" : event.newData.username,
                "componentNo" : event.newData.componentNo
                };
                this.storeService.createProduct(data).subscribe(
                  res => {
                    console.log(res);
                    event.confirm.resolve(event.newData);
                }
                )
              }

  deleteExistingRecord(event){
  this.storeService.deleteProduct(event.data._id).subscribe(
    res => {
      console.log(res);
      event.confirm.resolve(event.source.data);
  }
  )
}
updateExistingRecord(event){
  var data = {"name" : event.newData.name,
                "price" : event.newData.price,
                "createdAt" : event.newData.createdAt,
                "username" : event.newData.username,
                "componentNo" : event.newData.componentNo
                };
  this.storeService.updateProduct(event.data._id, data).subscribe(
    res => {
      console.log(res);
      event.confirm.resolve(event.newData);
    }
  )
}
}
