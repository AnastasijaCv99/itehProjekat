import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { MenuItems } from '../interfaces/menu-items';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  constructor(private route: ActivatedRoute, private menuService: MenuItemService, private router: Router) {   }


  @Input() menuItem: MenuItems;
  id: number;
  conditionNotLogged: boolean = true;
  conditionLoggedIn: boolean = false;

  url: string = this.router.url;
  quantity: any;

  ngOnInit(): void{
    this.menuItem = this.menuItem;
    console.log(this.router.url);
    if (localStorage.getItem('res') != null) {
      console.log('lcoal storafge', localStorage.getItem('res'));
      this.conditionNotLogged = false;
      this.conditionLoggedIn = true;
      }
    } 
  

  onAddToCart() {
    //if ((<HTMLInputElement>document.getElementById("quantity")).value == 0)
    //if((<HTMLInputElement>document.getElementById("quantity")).value != this.quantity) {
      //console.log('kolicina je', (<HTMLInputElement>document.getElementById("quantity")).value);

      this.menuItem.quantity = 1;

      //this.menuItem.quantity = this.quantity;
      //this.menuItem.quantity = 1;
      console.log(this.menuItem);
      this.menuService.addToArray(this.menuItem);    
  }

 

  onEdit(){
    
    this.menuService.setItem(this.menuItem);
    this.router.navigate(['home/waiter/settings/menus/', this.menuItem.id]);
  }

  onDelete() {
    this.id = this.menuItem.id;
    this.menuService.deleteMenuItem(this.id).subscribe((res) =>
    {
      console.log(res);
    })
  }


  
}
