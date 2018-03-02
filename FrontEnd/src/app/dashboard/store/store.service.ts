import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductById(usersProductsId){
  return this.http.get(environment.apiUrl + 'usersProducts/getProduct/'+usersProductsId);
}

getProductsByUsername(username){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByUsername/'+username);
}
getProductsByComponent(componentNo){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByComponent/'+componentNo);
}

createProduct(data){
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct', data);
}

getProductBelowPrice(price){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsBelowPrice'+price);
}

updateProduct(usersProductsId, data){
  return this.http.patch(environment.apiUrl + 'usersProducts/updateProduct/'+usersProductsId, data);
}

deleteProduct(usersProductsId){
  return this.http.delete(environment.apiUrl + 'usersProducts/deleteProduct/'+usersProductsId);
}
}
