import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
@Injectable()
export class SignupService {

  constructor(private httpClient: HttpClient) {}

  register(input: any){
    var config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    }
    console.log(input);
     return this.httpClient.post(environment.apiUrl + 'user/createUser',input,config)
     .subscribe(res => {console.log(res)});
  }

}
