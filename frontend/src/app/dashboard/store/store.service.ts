import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { 

  }

getProducts() {
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductById(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProduct/:usersProductsId');
}

getProductByUsername(username:string){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByUsername/'+username);
}
getProductByComponent(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByComponent/:componentNo');
}


createProduct(new_prod:any){
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct',new_prod);
}

updateProduct(new_prod:any,_id){
  return this.http.patch(environment.apiUrl + 'usersProducts/updateProduct/'+_id, new_prod);
}

deleteProduct(_id){
  return this.http.delete(environment.apiUrl + 'usersProducts/deleteProduct/'+_id);
}

}
