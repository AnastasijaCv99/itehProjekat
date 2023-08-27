import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  url:string = "http://localhost:8000/api/";
  constructor(private http:HttpClient) { }

login(user: User): Observable<any> {
  console.log("login");
  return this.http.post(`${this.url}login`, user);
}

registerUser(user: User): Observable<any> {
  console.log("register user: ");
  console.log(user);
  return this.http.post(`${this.url}register/user`, user);
}

getProfile(): Observable<any> {
  return this.http.get(`${this.url}profile`);
}

logout(): Observable<any> {
  return this.http.post(`${this.url}logout`, null);
}

}
