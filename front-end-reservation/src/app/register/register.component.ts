import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { User } from '../interfaces/user';
import { Cafe } from '../interfaces/cafe';
import { CafeService } from '../services/cafe.service';
import { AuthService } from '../services/auth.service';
import {MatIconModule} from '@angular/material/icon';
import { Menu } from '../interfaces/menu';
import { MenuItemService } from '../services/menu-item.service';
import { Router } from '@angular/router';


interface TypeOfCafe {
  value: string;
  viewValue: string;
}

@Component({
  //standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgFor,
    MatIconModule,
  ],
  //imports: [FormsModule, MatFormFieldModule, MatSelectModule, NgFor, MatInputModule],
})

export class RegisterComponent {

  formCounter: number = 1;
  selectedValue: string;
  user: User = {
    id: 0,
    cafeId: 0,
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    is_admin: true,
  };

  cafe: Cafe = {
    id : 0,
    title: 'string',
    address: 'string',
    ownerName: 'string',
    bankAccountNumber: 100,
    numberOfTables: 2,
    type: 'caffe'
  };

  menuItem: Menu = {
    id: 0,
    cafeId: 0,
    menu_name: 'string',
    drink_food_title: 'string',
    ingredients: 'string',
    price: 0
  }

  cafeData: Cafe;

  typess: TypeOfCafe[] = [
    {value: 'caffe', viewValue: 'Caffe'},
    {value: 'restaurant', viewValue: 'Restaurant'},
  ];

  firstFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    ownerCtrl: ['', Validators.required],
    numberCtrl: ['', Validators.required],
    addressCtrl: ['', Validators.required],
    tablesCtrl: ['', Validators.required],
    typeCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    lastNameCtrl: ['', Validators.required],
    emailCtrl: ['', [Validators.email, Validators.required]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(8)]],
  });

  thirdFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    itemNameCtrl: ['', Validators.required],
    priceCtrl: ['', Validators.required],
    descCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private cafeService: CafeService, 
              private userAuth: AuthService, private menu: MenuItemService, 
              private router: Router) {}

  onSubmit() {

    if (this.firstFormGroup.valid) {
      console.log(this.firstFormGroup.value);
      console.log(this.firstFormGroup.value.nameCtrl);
      
      this.cafe.title = this.firstFormGroup.value.nameCtrl as string;
      this.cafe.address = this.firstFormGroup.value.addressCtrl as string;
      this.cafe.type = this.firstFormGroup.value.typeCtrl as string;
      //this.cafe.ownerName = this.firstFormGroup.value.ownerCtrl as string;
      this.cafe.ownerName = this.firstFormGroup.value.ownerCtrl as string;
      //this.cafe.bankAccountNumber = this.firstFormGroup.value.numberCtrl as unknown as number;
      this.cafe.numberOfTables = this.firstFormGroup.value.tablesCtrl as unknown as number;
      this.cafe.bankAccountNumber = this.firstFormGroup.value.numberCtrl as unknown as number;
    //this.cafe.ownerName = 'default';
    //this.cafe.bankAccountNumber = 45456546456;
      

      this.cafeService.registerCafe(this.cafe).subscribe((res) => {
        this.cafeData = res[1];
        console.log(res);
      }); 
    }
  } //kraj on submit1 fje
    
  onSubmit2() {
    console.log(this.secondFormGroup.value);
    
    if(this.secondFormGroup.valid) {
      this.user.firstName = this.secondFormGroup.value.nameCtrl as string;
      this.user.lastName = this.secondFormGroup.value.lastNameCtrl as string;
      this.user.email = this.secondFormGroup.value.emailCtrl as string;
      this.user.password = this.secondFormGroup.value.passwordCtrl as string;
  
      console.log("cafe data id " + this.cafeData.id);
      this.user.cafeId = this.cafeData.id;
      
      this.user.is_admin = true;
      /*console.log("fja onSubmit2 cafe posle cuvanja u bazi a pre cuvanja usera");
      console.log(this.cafeData);
      console.log("cafe data id " + this.cafeData.id);
      console.log("fja onSubmit2 user pre cuvanja u bazi");
      console.log(this.user);
      */
      this.userAuth.registerUser(this.user).subscribe((res) => {
        console.log(res);
      }); 
    } 
  }

  onSubmit3() {
      //da se skupe podatak za menu name, i podaci  za item naziv, sastojci i cena
      //na back-u u kontroleru za menu nek se sacuva menu, vrati se id i odatle pozove konttroler za menu item
      if (this.thirdFormGroup.valid) {
        console.log(this.thirdFormGroup.value);
        this.menuItem.menu_name = this.thirdFormGroup.value.nameCtrl as string;
        this.menuItem.drink_food_title = this.thirdFormGroup.value.itemNameCtrl as string;
        this.menuItem.ingredients = this.thirdFormGroup.value.descCtrl as string;
        this.menuItem.price = this.thirdFormGroup.value.priceCtrl as unknown as number;
        this.menuItem.cafeId = this.cafeData.id;
        
        this.menu.registerMenu(this.menuItem).subscribe(
          (res) => {
            console.log(res);
          });
      }
  }// kraj onsubmti 3

  add(){
    this.formCounter++;
  }

  finalSubmit(){
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      //routerLink="login" routerLinkActive="active";
      this.router.navigate(['login']);
    };
  }
//
}

      //mora da se proveri ako nije zavrsena forma ova onda mora da se izbrise taj kafic iz baze 
      