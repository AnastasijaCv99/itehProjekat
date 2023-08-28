import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
//import { Cafe } from '../interfaces/cafe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userServise: AuthService, private router:Router) { };
  user: User;
    
  logout() {
    this.userServise.logout().subscribe((res)=>console.log(res));
    localStorage.removeItem('res');
    this.router.navigate(['login']);
  }
}
