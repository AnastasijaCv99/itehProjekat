import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  url: string = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { }


  registerMenu(menu: MenuItem): Observable<any> {
    console.log("menu registration");
    return this.http.post(`${this.url}register/menu`, menu);
  }

  getMenus(id: number): Observable<any> {
    return this.http.get(`${this.url}menu/${id}`);  //id je u ovom slucaju id kafica
  }
}
