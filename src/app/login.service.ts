import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  loginauthentication(data:any):Observable<any>{
    return this.httpClient.get("https://reqres.in/api/login",data);
  }


}
