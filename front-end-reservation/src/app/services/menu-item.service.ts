import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  url: string = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { }


  registerMenu(menu: Menu): Observable<any> {
    console.log("menu registration");
    return this.http.post(`${this.url}register/menu`, menu);
  }

  getMenus(id: number): Observable<any> {
    return this.http.get(`${this.url}cafe/${id}`);  //this id is id of a cafe
  }

  getMenuItems(id: number): Observable<any> {
    return this.http.get(`${this.url}menuItems/${id}`);  //this id is id of a menu
  }
}
