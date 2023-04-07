import { Injectable } from '@angular/core';
import { DeliveryPerson } from '../../models/delivery-person';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonService {
  private baseURL = environment.apiBaseUrl;


  constructor(private httpClient: HttpClient) {}
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  getDeliveryPersonsList() : Observable<DeliveryPerson[]>{
     return this.httpClient.get<DeliveryPerson[]>(this.baseURL+"/DeliveryPerson/all-DeliveryPersons");

  }

  createDeliveryPerson(DeliveryPerson: DeliveryPerson): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/DeliveryPerson/add-DeliveryPerson"}`, DeliveryPerson);
  }

  getDeliveryPersonById(idDeliveryP: number): Observable<DeliveryPerson>{
    return this.httpClient.get<DeliveryPerson>(`${this.baseURL+"/DeliveryPerson/retrieve-DeliveryPerson"}/${idDeliveryP}`);
  }


  public updateDeliveryPerson(DeliveryPerson: DeliveryPerson): Observable<DeliveryPerson> {
    return this.httpClient.put<DeliveryPerson>(`${this.baseURL+"/DeliveryPerson/update-DeliveryPerson"}`, DeliveryPerson);
  }


  deleteDeliveryPerson(idDeliveryP: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/DeliveryPerson/delete-DeliveryPerson"}/${idDeliveryP}`);  
  }

}
