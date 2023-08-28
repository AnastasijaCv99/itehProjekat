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
    path: 'waiter/home/:id',
    component: HomeComponent,
    canActivate: [authGuard],
    /*children: [{
      path: 'menu/:id',
      component: MenuItemComponent
    }]*/

  },
  {
    path: 'waiter/home/:id/menu/:id',
    component: MenuItemComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home/:id/cart',
    component: CartComponent,
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
