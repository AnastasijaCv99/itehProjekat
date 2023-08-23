import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
  constructor(private fb:FormBuilder, private auth:AuthService){}

  ngOnInit(): void{
    this.loginForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]],
    });
  }


  onLogin(){
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
    if (this.loginForm.valid) this.auth.login(this.loginForm.value).subscribe((res) => localStorage.setItem('res', res.access_token));
    
  }
}
