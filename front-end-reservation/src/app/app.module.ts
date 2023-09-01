import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { UserInterceptor } from './user.interceptor';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';
import { SettingsComponent } from './settings/settings.component';
import { WaitersComponent } from './waiters/waiters.component';
import { HeaderColorDirective } from './directives/header-color.directive';
import axios from 'axios';
import { ReservationsComponent } from './reservations/reservations.component';
import { SettingsMenusComponent } from './settings-menus/settings-menus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuMainComponent,
    HomeComponent,
    MenuItemComponent,
    CartComponent,
    SettingsComponent,
    WaitersComponent,
    HeaderColorDirective,
    ReservationsComponent,
    SettingsMenusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegisterComponent,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
