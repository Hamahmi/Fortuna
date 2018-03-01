import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name = "test";
  pass = "test";
  email = "test";
  public input = {
    username: '',
    password: '',
    email: ''
  };
  
  constructor(private signupService: SignupService, private router: Router) { }
  
  ngOnInit() {
  }

  onUpdateName(event:any){
    this.name=(<HTMLInputElement>event.target).value;
  }

  onUpdatePass(event:any){
    this.pass=(<HTMLInputElement>event.target).value;
  }

  onUpdateEmail(event:any){
    this.email=(<HTMLInputElement>event.target).value;
  }
  onRegister(){
    console.log('onRegister');
    this.input.username = this.name;
    this.input.password = this.pass;
    this.input.email = this.email;
    console.log(this.signupService.register(this.input));
    this.router.navigate(['../dashboard/login'])
  }
}

