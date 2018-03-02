import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(input: any){
    var config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    }
    console.log(input);
     return this.httpClient.post(environment.apiUrl + 'user/authenticate',input,config)
     .subscribe(res => {
       var msg = res["msg"];
       if(msg == 'true'){
         window.sessionStorage.username = input.username;
         
         this.router.navigate(['../dashboard/items']);
         window.location.reload();
       }
       else{
         alert("Wrong username or password");
        this.router.navigate(['../dashboard/login']);
       }
     });
  }

}
