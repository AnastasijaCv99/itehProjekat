import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { AuthService } from '../services/auth.service';
import { Menu } from '../interfaces/menu';
import { Cafe } from '../interfaces/cafe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private menuService: MenuItemService, private auth: AuthService) {   }
  
  menus: Menu[];

  

  ngOnInit(): void{
    this.getMenuForCafe();
   
  }

  getMenuForCafe(){
    const idc = Number(this.route.snapshot.paramMap.get('id'));
    
    this.menuService.getMenus(idc).subscribe((res) => {

      this.menus = res.data;
      console.log('menu items', this.menus);
    }) 
  }

}
