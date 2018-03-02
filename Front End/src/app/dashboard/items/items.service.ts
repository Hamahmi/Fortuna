import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  products(){
    var config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    }
     return this.httpClient.get(environment.apiUrl + 'usersProducts/getProductsByUsername/' + window.sessionStorage.username);
  }

  getuserProducts(username:string){
    return this.httpClient.get(environment.apiUrl + 'usersProducts/getProductsByUsername/'+username);
  }
  deleteuserProducts(id:object){
   return this.httpClient.delete(environment.apiUrl + 'usersProducts/deleteProduct/'+id);
 }
 createuserProducts(name:string,price:Number,username:string,componentNo:Number){
   return this.httpClient.post(environment.apiUrl + 'usersProducts/createProduct/',{"name":name,"price":price,"username":username,"componentNo":componentNo});
 }
 updateuserProducts(id:object,name:string,price:Number,username:string,componentNo:Number){
   return this.httpClient.patch(environment.apiUrl + 'usersProducts/updateProduct/'+id,{"name":name,"price":price,"username":username,"componentNo":componentNo});
 }

}
