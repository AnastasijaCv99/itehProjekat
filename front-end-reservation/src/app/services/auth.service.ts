import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  url:string = "http://localhost:8000/api/";

  private userLogged$ = new BehaviorSubject<any>({});
  selectedUser$ = this.userLogged$.asObservable();

  constructor(private http:HttpClient) { }

  setUser(user: User) {
    this.userLogged$.next(user);
  }

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

getAllUsersForCafe(id: number): Observable<any> {
  return this.http.get(`${this.url}cafe/${id}/users`);
}

editUser(user: User): Observable<any> {
  return this.http.put(`${this.url}cafe/settings/users`, user);
}



}
