import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'app/models/event';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

 
  
   url=environment.apiBaseUrl+"events";
 
   constructor(private httpClient: HttpClient) { }

  
 
   getEventList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.url + '/retrieveAllEvents');
   }

   createEvent(event: Event): Observable<any>{
     return this.httpClient.post(this.url + '/addEvent', event);
   }

   getEventById(idEvent: number): Observable<Event>{
    return this.httpClient.get<Event>(`${this.url}/retrieveEvent/${idEvent}`);
  }

  updateEvent1(idEvent:number, event: Event):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateEvent/${idEvent}`, event);
  }
  public updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.url+"/updateEvent"}`, event);
  }

  deleteEvent(idEvent: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteEvent/${idEvent}`);
  }

  getOldEventList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(this.url + '/retrieveEventsPlusTroixAns');
  }
  

  getEventsByLocation(location: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.url}/location/${location}`);
}

getEventsByName(name: string): Observable<Event[]> {
  return this.httpClient.get<Event[]>(`${this.url}/name/${name}`);
}
  

retrieveEventsByTimeRange(beginsAtEvent: string, endsAtEvent: string): Observable<Event[]> {
  return this.httpClient.get<Event[]>(`${this.url}?beginsAtEvent=${beginsAtEvent}&endsAtEvent=${endsAtEvent}`);
}


}
