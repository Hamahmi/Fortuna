import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  MyProducts;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getProductByUsername("SarahKhaled").subscribe(
        (res:any)=>{ 
          this.MyProducts = res.data;
        }
    )
  }

  settings = {

  add:{
    confirmCreate:true
   },
   
   edit:{
    confirmSave:true
   },
   delete :{
    confirmDelete: true
  },

    columns: {
      id:{
       title:'Product ID'
      },
      username: {
        title: 'Seller Name'
      },
      name: {
        title: 'Product name'
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
      componentNo: {
        title: 'Component'
      }
    }
  };



createProduct(event) {
    var product = {"name" : event.newData.name,
                 "price" : event.newData.price,
                 "username" : event.newData.username,
                 "componentNo" :event.newData.componentNo
                };

                this.storeService.createProduct(product).subscribe(
                  res => {
                        event.confirm.resolve(event.newData);
                  }
             )
             
       }
 
   deleteProduct(event){
  
        this.storeService.deleteProduct(event.data._id).subscribe(
          res => {
            event.confirm.resolve(event.source.data);
      
          }
      
        )
          
          }
             

     updateProduct(event){

      var product = { "username" : event.newData.username,
                  "name" : event.newData.name,
                   "price" :   event.newData.price,
                  "componentNo" : event.newData.componentNo,
                  
                };
                var id = event.data._id

                this.storeService.updateProduct(product,id).subscribe(
                 res=>{
                   event.confirm.resolve(event.newData);
                 }
               ) 
              }

              
             



  
}
