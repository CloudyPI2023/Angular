import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'app/models/user';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private baseURL = environment.apiBaseUrl;


  constructor(private httpClient: HttpClient) {}

  getUsersList() : Observable<User[]>{
     return this.httpClient.get<User[]>(this.baseURL+"/User/all-Users");

  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/User/add-User"}`, user);
  }

  getUserById(idUser: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"/User/retrieve-User"}/${idUser}`);
  }


  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL+"/User/update-User"}`, user);
  }


  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/User/delete-User"}/${id}`);  
  }

}
