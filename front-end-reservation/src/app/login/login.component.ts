import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /*email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }*/
  loginForm: FormGroup;
  user: User;
  cafeID: number;


  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router){}

  ngOnInit(): void{
    localStorage.clear();
    this.loginForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]],
    });
  }


  onLogin(){
    
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
    if (this.loginForm.valid) this.auth.login(this.loginForm.value).subscribe((res) => {
      localStorage.setItem('res', res.access_token);
      this.user = res.data;
      this.cafeID = res.data.cafe_id;
    });
    //neka provera da res nije null prvo pa onda redirect
    if (localStorage.getItem('res')) {
      this.auth.setUser(this.user);
      this.router.navigate(['waiter/home', this.cafeID]);
    } else this.router.navigate(['login']); //plus prikazi na ekranu da ima greska ono error nesto ili da su losi kredencijali
  
  }

  
}
