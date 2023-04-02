import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url=environment.apiBaseUrl+"requests";

  constructor(private httpClient: HttpClient) { }

  getRequestList(): Observable<Request[]>{
   return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequests');
   
  }

  createRequest(request: Request): Observable<any>{
    return this.httpClient.post(this.url + '/addRequest', request);
  }

  getRequestById(idRequest: number): Observable<Request>{
    return this.httpClient.get<Request>(`${this.url}/retrieveRequest/${idRequest}`);
  }

  updateRequest(idRequest:number, request: Request):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateRequest/${idRequest}`, request);
  } 

  deleteRequest(idRequest: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/cancelRequest/${idRequest}`);
  }
  
}
