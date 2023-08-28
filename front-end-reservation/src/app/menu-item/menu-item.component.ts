import { Component, Input } from '@angular/core';
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

  ngOnInit(): void{
    this.menuItem = this.menuItem;
  }

}
