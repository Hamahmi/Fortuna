import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class LaptopsService {

  constructor(private http: HttpClient) { }



getProducts() {
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductByComponent(number:any){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByComponent/'+number);
}


createProduct(new_prod:any){
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct',new_prod);
}}