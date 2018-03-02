import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ThemeModule } from '../../@theme/theme.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule, 
    ThemeModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
