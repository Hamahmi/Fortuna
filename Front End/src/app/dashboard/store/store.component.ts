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
    edit: {
      confirmSave: true,
    },
    delete: {
      confirmDelete: true,
    },
    
    add: {
      confirmCreate: true,
     },

    columns: {
      name: {
        title: 'Name'
      },
      price: {
        title: 'price'

      },
      createdAt: {
        title: 'Created At'

      },
      updatedAt: {
        title: 'Updated At'

      },

      username: {
        title: 'username'

      },

      componentNo: {
        title: 'componentNo'

      }
    }
  };

ngOnInit() {
    this.storeService.getProductsByUsername("AhmedAlaa77").subscribe(
        (res: any) => {
          this.products=res.data;
        }
    )}



    updateRecord(event){
      var id = event.data._id
      var data = {"name" : event.newData.name,
      "price" : event.newData.price,
      "createdAt" : event.newData.createdAt,
      "updatedAt": event.newData.updatedAt,
      "username": event.newData.username,
      "componentNo": event.newData.componentNo
      };
this.storeService.updateProduct(id,data).subscribe(
res => {
console.log(res);
event.confirm.resolve(event.newData);
}


 ) }

addRecord(event) {
  var data = {"name" : event.newData.name,
              "price" : event.newData.price,
              "createdAt" : event.newData.createdAt,
              "updatedAt": event.newData.updatedAt,
              "username": event.newData.username,
              "componentNo": event.newData.componentNo
              };
    this.storeService.createProduct(data).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
    }
  )
}


deleteRecord(event) {
  var id = event.data._id
      this.storeService.deleteProduct(id).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.source.Data);
    }
  )
}





}
