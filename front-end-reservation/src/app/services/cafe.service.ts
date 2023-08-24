import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cafe } from '../interfaces/cafe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  url: string = "http://localhost:8000/api/";

  constructor(private http:HttpClient) { }

  registerCafe(cafe: Cafe): Observable<any> {
    console.log("register cafe");
    return this.http.post(`${this.url}register/cafe`, cafe);
  }
}
