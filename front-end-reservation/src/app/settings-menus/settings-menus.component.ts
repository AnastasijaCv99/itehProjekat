import { Component } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { Cafe } from '../interfaces/cafe';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuItemService } from '../services/menu-item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings-menus',
  templateUrl: './settings-menus.component.html',
  styleUrls: ['./settings-menus.component.css']
})
export class SettingsMenusComponent {
  menuItem: Menu = {
    id: 0,
    cafeId: 0,
    menu_name: 'string',
    drink_food_title: 'string',
    ingredients: 'string',
    price: 0
  }
  cafeData: Cafe;

  thirdFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    itemNameCtrl: ['', Validators.required],
    priceCtrl: ['', Validators.required],
    descCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,private menu: MenuItemService, private router: Router, private route: ActivatedRoute) {}

  
  onSubmit3() {
  
    if (this.thirdFormGroup.valid) {
      console.log(this.thirdFormGroup.value);
      this.menuItem.menu_name = this.thirdFormGroup.value.nameCtrl as string;
      this.menuItem.drink_food_title = this.thirdFormGroup.value.itemNameCtrl as string;
      this.menuItem.ingredients = this.thirdFormGroup.value.descCtrl as string;
      this.menuItem.price = this.thirdFormGroup.value.priceCtrl as unknown as number;
      this.menuItem.cafeId = Number(this.route.snapshot.paramMap.get('id'));
      
      this.menu.registerMenu(this.menuItem).subscribe(
        (res) => {
          console.log(res);
        });
    }
}

}
