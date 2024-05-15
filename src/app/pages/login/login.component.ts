import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  user: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = ''
    this.password = ''
  }

  onLogin(){
    this.loginService.login({userName: this.user, password: this.password}).subscribe(res => console.log(res))
    
  }

  signUpRedirect() {
    this.router.navigateByUrl('/sign-up')
  }
}
