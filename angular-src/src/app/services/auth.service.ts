import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverRoute: String = 'http://localhost:3000';
  retrievedAdmin: Admin;
  loggedIn: Boolean = false;
  constructor(private http: HttpClient) {}

  // login(username: string, password: string) {
  //   const admin: Admin = {
  //     username: username,
  //     password: password
  //   };
  // }

  // register(username: string, password) {
  //   const admin: Admin = {
  //     username: username,
  //     password: password
  //   };
  //   this.http.post(this.serverRoute + '/register', admin).subscribe(admin => {
  //     console.log('Admin registered');
  //   });
  // }
}
