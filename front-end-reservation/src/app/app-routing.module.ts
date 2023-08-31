import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';
import { TestComponent } from './test/test.component';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home/waiter/settings/:id',
    component: TestComponent, //promeniti ovo
    canActivate: [authGuard],
  },
  {
    path: 'home/waiter/settings/menus/:id',
    component: SettingsComponent,
    canActivate: [authGuard],
  },
  {
    //for regular user and logged in user
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
