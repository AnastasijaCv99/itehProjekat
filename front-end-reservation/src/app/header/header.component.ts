import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user';
import { isEmpty } from 'rxjs';
import { Cafe } from '../interfaces/cafe';
import { CafeService } from '../services/cafe.service';
//import { Cafe } from '../interfaces/cafe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userServise: AuthService, private router:Router, private route: ActivatedRoute, private cafeService: CafeService) { };
  
  user: User;
  @Input() cartItems: number = 0;
  cafe: Cafe[];
  conditionLoggedUser: boolean = false;
  conditionLoggedAdmin: boolean = false;
  ifPresent: boolean = false;
  idc: Number;

  ngOnInit(): void{
    this.userDefinition();
    this.cafeDefinition();
    this.cartItems = this.cartItems; 
  }

  userDefinition(){
    this.userServise.selectedUser$.subscribe((value) => {
      this.user = value;
      if(Object.keys(this.user).length !== 0) {
        this.conditionLoggedUser = true;
      }
      console.log('proba da li radi ovo',this.user);
      if(this.user.is_admin==true) {
        console.log('admin');
        this.conditionLoggedAdmin = true;
      }
    });
  }

  logout() {
    this.userServise.logout().subscribe((res)=>console.log(res));
    localStorage.removeItem('res');
    this.router.navigate(['login']);
    this.conditionLoggedUser = false;
    this.conditionLoggedAdmin = false;
    this.ifPresent = false;
  }

  onHome(){
    this.router.navigate(['home', this.cafe[0].id]);
  }

  cafeDefinition(){
    this.cafeService.selectedCafe$.subscribe((value) => {
      this.cafe = value;
      if(Object.keys(this.cafe).length !== 0) {
        this.ifPresent = true;
      }
      console.log('home cafE: ', this.cafe);
      console.log('id of cafE', this.cafe[0].id)
      this.router.navigate(['home', this.cafe[0].id]);
    });
  }
}
