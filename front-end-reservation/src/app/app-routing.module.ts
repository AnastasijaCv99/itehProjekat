import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home/waiter/:id',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  /*  children: [{
      path: 'cart',
      component: CartComponent
    }]*/
  },
  {
    path: 'home/waiter/:id/menu/:id',
    component: MenuItemComponent,
    canActivate: [authGuard],
  },
  {
    //for regular user
    path: 'home/:id',
    component: HomeComponent
  },
  {
    //for regular user
    path: 'cart',
    component: CartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
