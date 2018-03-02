import { NgModule } from '@angular/core';
import { ItemsComponent } from './items.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsService } from './items.service';



@NgModule({
  imports: [ThemeModule, ItemsRoutingModule],
  declarations: [ItemsComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
