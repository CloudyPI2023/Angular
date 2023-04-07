import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { UserLogin } from './user-login';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  formModel = this.fb.group({

   Email: ['',Validators.required,
              Validators.email],
   Passwords: this.fb.group({
     Password: ['', [Validators.required, Validators.minLength(7)]]
   }),
  
   
 });

 login(formData:any) {
     console.log(formData);
    let  options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
     const payload = new HttpParams()
  .set('username', formData.email)
  .set('password', formData.password);
     return this.http.post(`${this.apiServerUrl}/login`,payload,options)
  }

  public getUsersByEmail(email: string): Observable<UserLogin[]> {
    console.log(email);
    return this.http.get<UserLogin[]>(`${this.apiServerUrl}/User/findByEmail/${email}`);
  }
  
  roleMatch(allowedRoles:any): boolean {
   var isMatch = false;
   var payLoad = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
   var userRole = payLoad.role;
   console.log(payLoad.role);
   allowedRoles.forEach((element: any) => {
     if (userRole == element) {
       isMatch = true;
       return false;
     }
   });
   return isMatch;
 }
}