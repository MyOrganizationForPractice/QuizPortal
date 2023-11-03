import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private router: Router) { }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/user/current-user`);
  }
  public login(loginData: any) {
    // return this.http.get(`${baseUrl}/user/${userName}/${password}/login`);
    return this.http.post(`${baseUrl}/auth/login`, loginData);
  }
  public loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token");
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
    return true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    var userstr = localStorage.getItem('user');
    if (userstr != null) {
      return JSON.parse(userstr);
    } else {
      this.logOut();
      return null;
    }
  }

  public getUserRole() {
    var user = this.getUser();
    return user.profile;
  }
}
