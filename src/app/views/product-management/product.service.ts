import { Injectable } from '@angular/core';
import { Product } from '../../models/Product/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8082/PharmaLife/Product";

  constructor(private httpClient: HttpClient) { }

  getAllProductsExpired(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/all-productsExpired");
  }
  getAllProductsNotExpired(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/all-productsNotExpired");
  }
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/all-products");
  }

  OnDetailsProduct(idProduct: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}` + "/retrieve-product/" + `${idProduct}`);
  }

  statisticsProductCategory(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}` + "/statisticsProductCategory/");
  }
  statisticsProductExpiration(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}` + "/statisticsProductExpiration/");
  }
}
