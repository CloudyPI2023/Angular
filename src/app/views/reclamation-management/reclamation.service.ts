import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from 'app/Models/reclamation';
import { Router } from 'express';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  
  private baseURL = "http://localhost:8082/PharmaLife/Reclamation";

  constructor(private httpClient: HttpClient) { }
  
  getAllReclamations(): Observable<Reclamation[]>{
    return this.httpClient.get<Reclamation[]>(`${this.baseURL}`+"/all-reclamations");
  }
  OnDetailsReclamation(idReclamation: number): Observable<Reclamation>{
    return this.httpClient.get<Reclamation>(`${this.baseURL}`+"/retrieve-reclamation/"+`${idReclamation}`);
  }

}
