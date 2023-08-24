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
    NgFor
  ],
  //imports: [FormsModule, MatFormFieldModule, MatSelectModule, NgFor, MatInputModule],
})

export class RegisterComponent {

  selectedValue: string;
  user: User = {
    cafeId: 0,
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    isAdmin: true,
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

  constructor(private _formBuilder: FormBuilder, private cafeService: CafeService, private userAuth: AuthService) {}

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
      
      this.user.isAdmin = true;
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

}

      //fali mi povratna vrednost odnosno treba mi id kafica
      //mora da se proveri ako nije zavrsena forma ova onda mora da se izbrise taj kafic iz baze 
      //console.log(this.user.cafeId);
      //(res) => this.user.cafeId=res.id