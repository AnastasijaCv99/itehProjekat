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
  @Output() addToCart = new EventEmitter<any>();
  condition: boolean = false;
  url: string = this.router.url;


  ngOnInit(): void{
    this.menuItem = this.menuItem;
    console.log(this.router.url);
    if (!this.url.includes('waiter')) this.condition = true;

    } 
  

  onAddToCart() {
    console.log(this.menuItem);
    this.menuItem.quantity = 1;
    this.menuService.addToArray(this.menuItem);
  }

  edit() {

  }

  delete() {
    this.id = this.menuItem.id;
    this.menuService.deleteMenuItem(this.id).subscribe((res) =>
    {
      console.log(res);
    })
  }


  
}
