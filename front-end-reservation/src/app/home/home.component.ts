import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { AuthService } from '../services/auth.service';
import { MenuItem } from '../interfaces/menu-item';
import { Cafe } from '../interfaces/cafe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private menuService: MenuItemService, private auth: AuthService) {   }
  
  menuItems: MenuItem[];
  menuData: any;
  

  ngOnInit(): void{
    this.getMenuForCafe();
   
  }

  getMenuForCafe(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.menuService.getMenus(id).subscribe((res) => {
      //this.menuData = res;
      console.log('menu data', this.menuData);
      this.menuItems = res.data;
      console.log('menu items', this.menuItems);
    }) 
  }

}
