import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { AuthService } from '../services/auth.service';
import { Menu } from '../interfaces/menu';
import { Cafe } from '../interfaces/cafe';
import { MenuItems } from '../interfaces/menu-items';


@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent {
  
  constructor(private route: ActivatedRoute, private menuService: MenuItemService, private auth: AuthService, private router:Router) {   }

  @Input() menus: Menu;
  

  menuItem: MenuItems[];

    ngOnInit(): void{
      this.menus = this.menus;
    }
  
    onClick(){
      //this.router.navigate(['home/menu', this.menus.id]);
      //this.router.createUrlTree(['home', this.menus.cafeId, 'menu', this.menus.id]);
      //this.router.navigate(['menu', this.menus.id], {relativeTo:this.route});
      this.getMenuItemsForMenu(this.menus.id);
    }

    getMenuItemsForMenu(id: number){
      //const idi = Number(this.route.snapshot.paramMap.get('id'));
      if (localStorage.getItem('res') != null) {
        this.menuService.getMenuItemsForWaiter(id).subscribe((res) => {
        this.menuItem = res;
        console.log(this.menuItem);
        }) 
      } else {
        this.menuService.getMenuItemsForUser(id).subscribe((res) => {
        this.menuItem = res;
        console.log(this.menuItem);
        }) 
      }
    }


}
