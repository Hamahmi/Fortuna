import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class CamerasService{
    constructor(private httpClient :HttpClient ){}

    
getuserProducts(componentNo:Number){
     return this.httpClient.get(environment.apiUrl + 'usersProducts/getProductsByComponent/'+componentNo);
   }
}