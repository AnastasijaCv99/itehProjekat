import { Component } from '@angular/core';
import { MenuItemService } from '../services/menu-item.service';
import { Router } from '@angular/router';
import { MenuItems } from '../interfaces/menu-items';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private menuService: MenuItemService, private router: Router) {   }

  itemForEdit: MenuItems;

  ngOnInit(): void {
    this.itemDefinition();
  }

  itemDefinition(){
    this.menuService.edit$.subscribe((value) => {
      this.itemForEdit = value;
      console.log('proba item for edit: ',this.itemForEdit);
    });
  }

  edit(){
    this.itemForEdit.drink_food_title = (<HTMLInputElement>document.getElementById("title")).value;
    this.itemForEdit.ingredients = (<HTMLInputElement>document.getElementById("ingredients")).value;
    this.itemForEdit.price = (<HTMLInputElement>document.getElementById("price")).value as unknown as number;
    console.log('posle edita: ', this.itemForEdit);
    this.menuService.editItem(this.itemForEdit).subscribe((res) => {
      console.log(res);
    })
  }
}
