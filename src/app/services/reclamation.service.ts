import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Reclamation } from '../Models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseURL = "http://localhost:8082/PharmaLife/Reclamation";

  constructor(private httpClient: HttpClient) { }
  
  getAllReclamations(): Observable<Reclamation[]>{
    return this.httpClient.get<Reclamation[]>(`${this.baseURL}`+"/all-reclamations");
  }

  
}