import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    FormsModule,
    CommonModule,
    PasswordModule,
    ButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Here you can add authentication logic
    if (this.username && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Please enter username and password');
    }
  }

}
