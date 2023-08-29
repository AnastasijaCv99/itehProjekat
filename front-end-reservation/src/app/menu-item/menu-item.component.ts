import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { MenuItems } from '../interfaces/menu-items';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  constructor(private route: ActivatedRoute, private menuService: MenuItemService) {   }


  @Input() menuItem: MenuItems;
  id: number;
  @Output() addToCart = new EventEmitter<number>();
  cartItems: number = 0;


  ngOnInit(): void{
    this.menuItem = this.menuItem;
  }

  onAddToCart() {
      //this.product.supplies--;
      this.cartItems++;
      this.addToCart.emit(this.cartItems);
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
