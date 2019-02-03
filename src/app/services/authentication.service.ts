import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../beans/user';

// http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial#app-routing-ts
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  // For reactively updating to user logins/logouts
  public currentUser: Observable<User>;
  private authUrl: string = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
    private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Useful for knowing value at single time, like possible auth.guard
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  register(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log("Registered user");
    this.currentUserSubject.next(user);
    this.router.navigate(['users/dashboard']);
  }

  login(username: string, password: string) {
    var loginData = { 'username': username, 'password': password };
    return this.http.post<any>(`login`, loginData)
      .pipe(map(user => {
        if (user){
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(user);
          this.currentUserSubject.next(user);
        }
        else
          console.log('No user');
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.http.get<void>(this.authUrl + '/logout')
      .subscribe(_ => console.log('Logged out'));
      this.router.navigate(['']);
  }
}
