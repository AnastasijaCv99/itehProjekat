import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { AuthService } from '../services/auth.service';
import { MenuItem } from '../interfaces/menu-item';
import { Cafe } from '../interfaces/cafe';


@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css']
})
export class MenuMainComponent {
  
  constructor(private route: ActivatedRoute, private menuService: MenuItemService, private auth: AuthService) {   }
  
  //menuName: string = '';
  

  @Input() menuItems: MenuItem;
    //menuData: any;
    
    ngOnInit(): void{
  
      //this.getMenuForCafe();
      this.menuItems = this.menuItems;
    }
  
    /*getMenuForCafe(){
      const id = Number(this.route.snapshot.paramMap.get('id'));
      
      //this.heroService.getHero(id)
      //  .subscribe(hero => this.hero = hero);
      
      this.menuService.getMenus(id).subscribe((res) => {
        this.menuData = res;
        console.log(this.menuData);
      }) 
    }*/
}
