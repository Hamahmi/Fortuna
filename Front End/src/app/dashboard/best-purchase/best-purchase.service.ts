import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class BestPurchaseService {

  constructor(private httpClient: HttpClient) { }

  products(){
    var config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    }
     return this.httpClient.get(environment.apiUrl + 'usersProducts/getProductsByComponent/');
  }
}
