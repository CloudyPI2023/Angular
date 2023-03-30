import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Gift } from '../Models/gift';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private baseURL = "http://localhost:8082/PharmaLife/Gift";

  constructor(private httpClient: HttpClient) { }
  
  getAllGifts(): Observable<Gift[]>{
    return this.httpClient.get<Gift[]>(`${this.baseURL}`+"/all-gifts");
  }
}