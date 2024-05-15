import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../core/services/register/register.service'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  myForm!: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private registerService: RegisterService
  ) {
    this.myForm = this.formBuilder.group({
      user: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeat_password: ['']
    })
  }

  validatePassword(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('repeat_password')?.value;

    if (password !== confirmPassword) {
      return false
    } else {
      return true
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      const user = this.myForm.get('user')?.value;
      const email = this.myForm.get('email')?.value;
      const password = this.myForm.get('password')?.value;
      this.registerService.register({userName: user, email, password}).subscribe(res => {
        localStorage.setItem('token', res.token)
        this.productRedirect()
      })
    }
  }

  signInRedirect() {
    this.router.navigateByUrl('/')
  }

  productRedirect() {
    this.router.navigateByUrl('/products')
  }

}
