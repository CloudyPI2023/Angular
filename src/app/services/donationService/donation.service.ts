import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from 'app/models/donation';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  url=environment.apiBaseUrl+"donations";
  constructor(private httpClient: HttpClient) { }


  getDonationList(): Observable<Donation[]>{
   return this.httpClient.get<Donation[]>(this.url + '/retrieveAllDonations');  
  }

  createDonation(donation: Donation): Observable<any>{
    return this.httpClient.post(this.url + '/addDonation', donation);
  }

  getDonationById(idDonation: number): Observable<Donation>{
    return this.httpClient.get<Donation>(`${this.url}/retrieveDonation/${idDonation}`);
  }

  updateDonation(idDonation:number, donation: Donation):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateDonation/${idDonation}`, donation);
  } 

  deleteDonation(idDonation: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteDonation/${idDonation}`);
  }

  
}
