import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from 'app/models/AssociationAndDonation/donation';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DonationService {



  url=environment.apiBaseUrl+"donations";
  constructor(private httpClient: HttpClient) { }

  getDisabledDonations(idRequest): Observable<Donation[]>{
    return this.httpClient.get<Donation[]>(`${this.url}/getDisabledDonations/${idRequest}`);  
   }

  getDonationList(): Observable<Donation[]>{
   return this.httpClient.get<Donation[]>(this.url + '/retrieveAllDonations');  
  }

  createDonation(donation: Donation): Observable<any>{
    return this.httpClient.post(this.url + '/addDonation', donation);
  }

  getDonationById(idDonation: number): Observable<Donation>{
    return this.httpClient.get<Donation>(`${this.url}/retrieveDonation/${idDonation}`);
  }

  updateDonation1(idDonation:number, donation: Donation):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateDonation/${idDonation}`, donation);
  } 

  public updateDonation(donation: Donation): Observable<Donation> {
    return this.httpClient.put<Donation>(`${this.url+"/updateDonation"}`, donation);
  }

  deleteDonation(idDonation: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteDonation/${idDonation}`);
  }

  statisticsDonationStatus(): Observable<Map<String,number>>{
    return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsDonationStatus/");
  } 
  statisticsDonationType(): Observable<Map<String,number>>{
    return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsDonationType/");
  } 

  getDonationStatisticsByDate(): Observable<any> {
    return this.httpClient.get(`${this.url}/statisticsDonationDate1`);
  }

  getDonationStatisticsByDate1(): Observable<any> {
    return this.httpClient.get(`${this.url}/statisticsDonationDate1`).pipe(
      map((response: any) => {
        const labels = Object.keys(response);
        const values = Object.values(response).map((innerMap: any) => Object.values(innerMap));
        return { labels, values };
      })
    );
  }
 
  getDonationsByAssociation(idAssociation: number): Observable<Donation>{
    return this.httpClient.get<Donation>(`${this.url}/getDonationsByAssociation/${idAssociation}`);
  }
  ////////////////////////////////////////////////////

  getDonationStatisticsByDate2(): Observable<any> {
    return this.httpClient.get(`${this.url}/statisticsDonationDate1/`);
  }

  //Partie Request 
  getDonationsByRequest(idRequest: number): Observable<Donation>{
    return this.httpClient.get<Donation>(`${this.url}/getDonationsByRequest/${idRequest}`);
  }

  
}
