import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  myForm!: FormGroup;

  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  onSubmit() {
    if (this.myForm.valid) {
      const user = this.myForm.get('user')?.value;
      const password = this.myForm.get('password')?.value;
      this.loginService.login({userName: user, password: password}).subscribe(res => console.log(res))
    }
  }

  // onLogin(){
  //   this.loginService.login({userName: this.user, password: this.password}).subscribe(res => console.log(res))
    
  // }

  signUpRedirect() {
    this.router.navigateByUrl('/sign-up')
  }
}
