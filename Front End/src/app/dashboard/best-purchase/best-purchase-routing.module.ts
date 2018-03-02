import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestPurchaseComponent } from './best-purchase.component';

const routes: Routes = [{
  path: '', component: BestPurchaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestPurchaseRoutingModule { }
