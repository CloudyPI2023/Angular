import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8082/PharmaLife/Product";

  constructor(private httpClient: HttpClient) { }
  
  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`+"/all-productsBack");
  }
}