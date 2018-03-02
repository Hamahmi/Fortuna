import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupService } from './signup.service';
import { SignupRoutingModule } from './signup-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
  providers: [SignupService]
})
export class SignupModule {
  
  
}
