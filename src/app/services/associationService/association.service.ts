import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Association } from 'app/models/association';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

 
  
   url=environment.apiBaseUrl+"associations";
 
   constructor(private httpClient: HttpClient) { }

  
 
   getAssociationList(): Observable<Association[]>{
    return this.httpClient.get<Association[]>(this.url + '/retrieveAllAssociations');
   }

   createAssociation(association: Association): Observable<any>{
     return this.httpClient.post(this.url + '/addAssociation', association);
   }

   getAssociationById(idAssociation: number): Observable<Association>{
    return this.httpClient.get<Association>(`${this.url}/retrieveAssociation/${idAssociation}`);
  }

  updateAssociation(idAssociation:number, association: Association):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateAssociation/${idAssociation}`, association);
  }

  deleteAssociation(idAssociation: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteAssociation/${idAssociation}`);
  }

}
