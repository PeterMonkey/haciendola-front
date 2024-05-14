import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor() {
    this.user = ''
    this.password = ''
  }

  onLogin(){
    console.log(this.user)
    console.log(this.password)
  }
}
