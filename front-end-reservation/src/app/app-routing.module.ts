import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';
import { SettingsComponent } from './settings/settings.component';
import { WaitersComponent } from './waiters/waiters.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SettingsMenusComponent } from './settings-menus/settings-menus.component';



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
    path: 'home/waiter/settings/menus/add/:id',
    component: SettingsMenusComponent, 
    canActivate: [authGuard],
  },
  {
    path: 'home/waiter/settings/menus/:id', //id je od meni itema
    component: SettingsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home/waiter/settings/waiters/:id', //id je od cafea
    component: WaitersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'home/waiter/reservation/:id',  //id je od cafea
    component: ReservationsComponent,
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
