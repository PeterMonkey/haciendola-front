import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Observable } from 'rxjs';

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

  constructor(private loginService: LoginService) {
    this.user = ''
    this.password = ''
  }

  onLogin(){
    this.loginService.login({userName: this.user, password: this.password}).subscribe(res => console.log(res))
    
  }
}
