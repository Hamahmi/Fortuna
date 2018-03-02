import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = "test";
  pass = "test";
  public input = {
    username: '',
    password: ''
  };
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onUpdateName(event:any){
    this.name=(<HTMLInputElement>event.target).value;
  }

  onUpdatePass(event:any){
    this.pass=(<HTMLInputElement>event.target).value;
  }

  onLogin(){
    this.input.username = this.name;
    this.input.password = this.pass;
    this.loginService.login(this.input);
  }
}