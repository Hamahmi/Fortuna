import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class MainStoreService{
    constructor(private httpClient :HttpClient ){}

    
getuserProducts(){
     return this.httpClient.get(environment.apiUrl + 'usersProducts/getProducts');
   }
}