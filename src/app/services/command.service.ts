import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Command } from 'app/models/command';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  url=environment.apiBaseUrl+"commands";
 
  constructor(private httpClient: HttpClient) { }

 

  getCommandsList(): Observable<Command[]>{
   return this.httpClient.get<Command[]>(this.url + '/retrieveAllCommand');
  }
  
  createCommand(command: Command): Observable<any>{
    return this.httpClient.post(this.url + '/add-command', command);
  }

  deleteCommand(idCommand: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/delete-command/${idCommand}`);
  }

  updateCommand1(idCommand:number, command: Command):Observable<Object>{
    return this.httpClient.put(`${this.url}/editCommand/${idCommand}`, command);
  } 

  updateCommand(command: Command): Observable<Command> {
    return this.httpClient.put<Command>(`${this.url+"/editCommand"}`, command);
  }


  statisticsCommandStatus(): Observable<Map<String,number>>{
    return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsCommandStatus/");
  } 

}
