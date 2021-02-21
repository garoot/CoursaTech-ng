import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import jwtDecode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../environments/environment';

@Injectable()
export class AuthService {

  private apiRoot = 'http://127.0.0.1:8000/api/';
  public token: any = {"refresh":"", "access":""};
  public refresh: any = "";
  constructor(
    private http: HttpClient,
    private router: Router
    
    ) { }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    // this.token = authResult.token;
    // const payload = <JWTPayload> jwtDecode(this.token);
    // const expiresAt = moment.unix(payload.exp);
    localStorage.setItem('jwt', JSON.stringify(authResult));
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    // console.log(expiresAt)
    // localStorage.setItem('token', authResult.token);
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

  }

  // get token(): string {
  //   return localStorage.getItem('token');
  // }

  login(email: string, password: string) {
    return this.http.post(
      this.apiRoot.concat('login/'),
      { email, password }
    )
    .pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    )
  }

  signup(username: string, email: string, password: string) {
    // TODO: implement signup
    return this.http.post(
      this.apiRoot.concat('user/create/'),
      { username, email, password }
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('expires_at');
  }

  refreshToken(): any {
    this.token = localStorage.getItem('jwt')
    var refresh = JSON.parse(this.token).refresh
    return this.http.post(
      this.apiRoot.concat('token/refresh/'),
      { refresh })
      .pipe(
            tap(response => this.setSession(response)),
            shareReplay(),
          )

    
    // if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
    //   return this.http.post(
    //     this.apiRoot.concat('token/refresh/'),
    //     { token: this.token }
    //   ).pipe(
    //     tap(response => this.setSession(response)),
    //     shareReplay(),
    //   ).subscribe();
    // }
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    // console.log(moment(expiresAt))

    return moment(expiresAt);
  }

  isLoggedIn() {
    console.log(moment(this.getExpiration()).isBefore())
    return moment(this.getExpiration()).isBefore();

  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('jwt');

//     if (token) {
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization', 'JWT '.concat(token))
//       });

//       return next.handle(cloned);
//     } else {
//       return next.handle(req);
//     }
//   }
// }

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate() {
//     if (this.authService.isLoggedIn()) {
//       this.authService.refreshToken();

//       return true;
//     } else {
//       this.authService.logout();
//       this.router.navigate(['login']);

//       return false;
//     }
//   }
// }

interface JWTPayload {
  user_id: number;
  username: string;
  email: string;
  exp: number;
}