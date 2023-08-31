import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuItems } from '../interfaces/menu-items';
import { SendReservation } from '../interfaces/send-reservation';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  url: string = "http://localhost:8000/api/";


  items: Array<MenuItems> = [];
  
  private itemForEdit$ = new BehaviorSubject<any>({});
  edit$ = this.itemForEdit$.asObservable();

  constructor(private http: HttpClient) { }

  setItem(item: MenuItems) {
    this.itemForEdit$.next(item);
  }

  registerMenu(menu: Menu): Observable<any> {
    console.log("menu registration");
    return this.http.post(`${this.url}register/menu`, menu);
  }

  getMenusForWaiter(id: number): Observable<any> {
    return this.http.get(`${this.url}cafe/${id}`);  //this id is id of a cafe
  }

  getMenusForUser(id: number): Observable<any> {
    return this.http.get(`${this.url}home/${id}`);  //this id is id of a cafe
  }

  getMenuItemsForWaiter(id: number): Observable<any> {
    return this.http.get(`${this.url}cafe/menuItems/${id}`);  //this id is id of a menu for a waiter
  }

  getMenuItemsForUser(id: number): Observable<any> {
    return this.http.get(`${this.url}home/menuItems/${id}`);  //this id is id of a menu for a user
  }

  deleteMenuItem(id: number): Observable<any> {
    return this.http.delete(`${this.url}cafe/settings/menus/${id}`);  //this id is id of a menu
  }

  returnArray(): MenuItems[] {
    return this.items;
  }

  addToArray(item: MenuItems) {
    this.items.push(item);
  }

  emptyArray() {
    this.items.length = 0;
  }

  makeAnOrder(reservation: SendReservation): Observable<any> {
    return this.http.post(`${this.url}home/reservation`, reservation);
  }

  editItem(item: MenuItems): Observable<any> {
    return this.http.put(`${this.url}cafe/settings/menuItems`, item);
  }
}
