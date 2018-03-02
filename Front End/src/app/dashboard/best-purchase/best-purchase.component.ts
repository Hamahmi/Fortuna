import { Component, OnInit } from '@angular/core';
import { BestPurchaseService } from './best-purchase.service';

@Component({
  selector: 'app-best-purchase',
  templateUrl: './best-purchase.component.html',
  styleUrls: ['./best-purchase.component.scss']
})
export class BestPurchaseComponent implements OnInit {

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
      }
    },
    actions:{
      edit:false,
      delete:false
    }
  };

  products;

  constructor(private bestPurchaseService: BestPurchaseService) { }

  ngOnInit() {
    this.bestPurchaseService.products().subscribe(
      (res:any)=>{ 
        this.products = res.data;
      }
  )
  }

}
