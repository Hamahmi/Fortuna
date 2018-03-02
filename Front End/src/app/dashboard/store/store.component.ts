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

 




delete :{
   confirmDelete: true
 } , 
 

edit:{
     confirmSave:true
    },

    add:{
     confirmCreate:true
      },

    columns: {
      id:{
       title:'id'
      },
      username: {
        title: 'User Name'
      },
      name: {
        title: 'name'
      },
    
      price: {
        title: 'Price'
      },
      componentNo: {
        title: 'Component number'
      },
      createdAt: {
        title: 'Created At'
      },
      updatedAt: {
        title: 'Updated At'
      }
    }
  };

  ngOnInit() {
    this.storeService.getProducts().subscribe(
        (res: any) => {
          this.products=res.data;
        }
    )
  }




  addProduct(event) {
      var data = {"username" : event.newData.username,
                  "price" : event.newData.price,
                  "name" : event.newData.name,
                  
                  "componentNo" : event.newData.componentNo
                  };
   this.storeService.createProduct(data).subscribe(
          res => {
            console.log(res);
            event.confirm.resolve(event.newData);

    })
  }
  updateProduct(event) {
    var data = {"username" : event.newData.username,
                "price" : event.newData.price,
                "name" : event.newData.name,
                "id" :event.newData._id,
                "componentNo" : event.newData.componentNo
                };
                
 this.storeService.updateProduct(data,event.data._id).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);

  })
}
deleteRecord(event) {
  
  var id = event.data._id;
          
            
                        
this.storeService.deleteProduct(id).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);

})
}


}
