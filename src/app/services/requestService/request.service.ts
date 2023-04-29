import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from 'app/models/request';
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

  updateRequest1(idRequest:number, request: Request):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateRequest/${idRequest}`, request);
  } 

  public updateRequest(request: Request): Observable<Request> {
    return this.httpClient.put<Request>(`${this.url+"/updateRequest"}`, request);
  }

  deleteRequest(idRequest: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/cancelRequest/${idRequest}`);
  }

  getListRequestByIdAssociation(idAssociation: number): Observable<Request>{
    return this.httpClient.get<Request>(`${this.url}/getMyRequests/${idAssociation}`);
  }
  getRequestInProgressList(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequestsInProgress');
    
   }
   getRequestAcceptedList(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequestsAccepted');
    
   }
   getRequestRefusedList(): Observable<Request[]>{
    return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequestsRefused');
    
   }
   assignRequestToDonation(request: Request): Observable<Object> {
    return this.httpClient.put<Request>(`${this.url+"/updateRequestDonation"}`,request);
   }


   statisticsRequestsStatus(): Observable<Map<String,number>>{
    return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsRequestStatus/");
  } 
  statisticsRequestsType(): Observable<Map<String,number>>{
    return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsRequestType/");
  } 
  
}
