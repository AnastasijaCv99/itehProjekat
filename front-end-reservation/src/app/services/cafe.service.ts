import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cafe } from '../interfaces/cafe';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  url: string = "http://localhost:8000/api/";

  private cafe$ = new BehaviorSubject<any>({});
  selectedCafe$ = this.cafe$.asObservable();

  constructor(private http:HttpClient) { }

  setCafe(cafee: Cafe) {
    this.cafe$.next(cafee);
  }

  registerCafe(cafe: Cafe): Observable<any> {
    console.log("register cafe");
    return this.http.post(`${this.url}register/cafe`, cafe);
  }
}
