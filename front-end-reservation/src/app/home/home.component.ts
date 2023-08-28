import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { AuthService } from '../services/auth.service';
import { Menu } from '../interfaces/menu';
import { Cafe } from '../interfaces/cafe';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private menuService: MenuItemService, private auth: AuthService) {   }
  
  menus: Menu[];
  user: User;
  

  ngOnInit(): void{
    this.getMenuForCafe();
    this.userDefinition();
  }

  getMenuForCafe(){
    const idc = Number(this.route.snapshot.paramMap.get('id'));
    if (localStorage.getItem('res')) {
        this.menuService.getMenusForWaiter(idc).subscribe((res) => {
        this.menus = res.data;
        console.log('menu items', this.menus);
      })
    } else {
        this.menuService.getMenusForUser(idc).subscribe((res) => {
        this.menus = res.data;
        console.log('menu items', this.menus);
      })
    }
  }

  userDefinition(){
    this.auth.selectedUser$.subscribe((value) => {
      this.user = value;
      console.log('proba da li radi ovo',this.user);
      if(this.user.is_admin==true) console.log('admin');
    });
  }
}
