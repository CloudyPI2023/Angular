import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift } from 'app/Models/gift';
import { Product } from 'app/Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private baseURL = "http://localhost:8082/PharmaLife/Gift";

  constructor(private httpClient: HttpClient) { }
  
  
  getAllGifts(): Observable<Gift[]>{
    return this.httpClient.get<Gift[]>(`${this.baseURL}`+"/all-gifts");
  }

  OnDetailsGift(idGift: number): Observable<Gift>{
    return this.httpClient.get<Gift>(`${this.baseURL}`+"/retrieve-gift/"+`${idGift}`);
  }

  getAllProductsForGift(idGift:number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`+"/productsForGift"+`${idGift}`);
  }

}
