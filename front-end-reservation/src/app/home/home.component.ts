import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { AuthService } from '../services/auth.service';
import { Menu } from '../interfaces/menu';
import { Cafe } from '../interfaces/cafe';
import { User } from '../interfaces/user';
import { CafeService } from '../services/cafe.service';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private menuService: MenuItemService, private auth: AuthService, private cafeSerice: CafeService,
    private cs: CocktailService) {   }
  
  menus: Menu[];
  user: User;
  cafe: Cafe;


  ngOnInit(): void{
    this.getMenuForCafe();
    this.cafeDefinition();
    this.userDefinition();
  }

  getMenuForCafe(){
    const idc = Number(this.route.snapshot.paramMap.get('id'));
    //this.cafe.id = idc;
    //this.cafeS.setCafe(this.cafe);
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
      console.log('proba useer: ',this.user);
      if(this.user.is_admin==true) console.log('admin');
    });
  }


  cafeDefinition(){
    const idc = Number(this.route.snapshot.paramMap.get('id'));
    this.cafeSerice.getCafeInfo(idc).subscribe((res) => {
      this.cafe = res;
      console.log('cafe data from home component', this.cafe);
      this.cafeSerice.setCafe(this.cafe);
    })
  }
  ajde(){
    this.cs.getJoke();
    }
  
}
