import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { isEmpty } from 'rxjs';
//import { Cafe } from '../interfaces/cafe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userServise: AuthService, private router:Router) { };
  user: User;
    
  condition: boolean = false;

  ngOnInit(): void{
    this.userDefinition();
  }

  userDefinition(){
    this.userServise.selectedUser$.subscribe((value) => {
      this.user = value;
      if(Object.keys(this.user).length !== 0) {
        this.condition = true;
      }
      console.log('proba da li radi ovo',this.user);
      if(this.user.is_admin==true) console.log('admin');
    });
  }


  logout() {
    this.userServise.logout().subscribe((res)=>console.log(res));
    localStorage.removeItem('res');
    this.router.navigate(['login']);
    this.condition = false;
  }



}
