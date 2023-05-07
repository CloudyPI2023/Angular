import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from 'app/models/reservation';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 
  
   url=environment.apiBaseUrl+"reservations";
 
   constructor(private httpClient: HttpClient) { }

  
 
   getReservationList(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(this.url + '/retrieveAllReservations');
   }

   createReservation(reservation: Reservation): Observable<any>{
     return this.httpClient.post(this.url + '/addReservation', reservation);
   }

   getReservationById(idReservation: number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.url}/retrieveReservation/${idReservation}`);
  }

  updateReservation1(idReservation:number, reservation: Reservation):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateReservation/${idReservation}`, reservation);
  }
  public updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.put<Reservation>(`${this.url+"/updateReservation"}`, reservation);
  }

  deleteReservation(idReservation: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteReservation/${idReservation}`);
  }

  getOldReservationList(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(this.url + '/retrieveReservationsPlusTroixAns');
  }
  

}
