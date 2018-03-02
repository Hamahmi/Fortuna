import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductById(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProduct/:productId');
}

getProductBelowPrice(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsBelowPrice/:price');
}

createProduct(data:any){
  
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct',data);
}

updateProduct(data:any,usersProductsId){
  
  return this.http.patch(environment.apiUrl + 'usersProducts/updateProduct/'+usersProductsId,data);
}

deleteProduct(usersProductsId){
  
  
  return this.http.delete(environment.apiUrl + 'usersProducts/deleteProduct/'+usersProductsId);
}

getProductsByUsername(){

 return this.http.get(environment.apiUrl + 'usersProducts/getProductsByUsername/:productId');

}
getProductsByComponent(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByComponent/:componentNo');
}

}
