import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  public authenticated: boolean = false;
  public token: any = {"refresh":"", "access":""};
  public refresh: any = "";


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      () => {
        this.token = localStorage.getItem('jwt')
        this.refresh = JSON.parse(this.token).refresh
        console.log(this.authService.isLoggedIn)
        // if (this.token){
        this.router.navigate(['/bloglist'])
        // }
      }
    ); 
    // this.token = localStorage.getItem('jwt')
    // this.refresh = localStorage.getItem('refresh')
  }

  isLoggedIn(): boolean {
    if (this.authService.isLoggedIn()){
      return true
    } else {
      return false
    }

  }

  refreshToken(){
    this.authService.refreshToken().subscribe(
      // success => this.router.navigate(['list']),
      // error => this.error = error
      (response:any) => {
        localStorage.setItem('jwt', JSON.stringify(response));
        this.token = localStorage.getItem('jwt')
        // this.refresh = JSON.parse(this.token).refresh
        // console.log(this.token)
        // this.router.navigate(['/bloglist'])
      }
    ); 
  }
}