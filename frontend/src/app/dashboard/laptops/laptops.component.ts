import { Component, OnInit } from '@angular/core';
import {LaptopsService} from './laptops.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {
  Products;

  constructor(private laptopsService: LaptopsService) { }
  ngOnInit() {
    this.laptopsService.getProductByComponent("5").subscribe(
      (res:any)=>{ 
        this.Products = res.data;
      }
  )
  }


  settings = {

    add:{
      confirmCreate:true
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
  
                  this.laptopsService.createProduct(product).subscribe(
                    res => {
                          event.confirm.resolve(event.newData);
                    }
               )
               
         }

}
