/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
  idToken:	string;
email:	string;
refreshToken:	string;
expiresIn:	string;
localId:	string;
registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated=false;
  get authenticated(){
    return this._isAuthenticated;
  }
  constructor(private http: HttpClient) { }
  // login(){
  //   this._isAuthenticated=true;
  // }
  // logout(){
  //   this._isAuthenticated=false;
  // }

  signup(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUfHKUO9Vc6BCi4TDDq3kyMKe0aJJWzHo',
    {
      email: email,password: password, returnSecureToken: true
    });
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUfHKUO9Vc6BCi4TDDq3kyMKe0aJJWzHo',{
      email: email,password: password, returnSecureToken: true
    });
  }
}
