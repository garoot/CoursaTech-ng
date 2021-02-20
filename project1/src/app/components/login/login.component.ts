import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  public authenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      success => this.router.navigate(['list']),
      error => this.error = error
    );  
    this.authenticated = this.authService.isLoggedIn()
  }

  isLoggedIn() {
    this.authenticated = this.authService.isLoggedIn()
  }
}