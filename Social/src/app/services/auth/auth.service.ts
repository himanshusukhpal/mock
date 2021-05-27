/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

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
  private _user= new BehaviorSubject<User>(null);

  get authenticated(){
    return this._user.asObservable().pipe(
      map(user=>{
        if(user){
          console.log(!!user.token);
          return !!user.token;}
        else{return false;}
        }));
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
    }).pipe(
      tap(this.setUserData.bind(this)
        ));
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUfHKUO9Vc6BCi4TDDq3kyMKe0aJJWzHo',{
      email: email,password: password, returnSecureToken: true
    }).pipe(
      tap(this.setUserData.bind(this)
        ));
  }

  private setUserData(userData: AuthResponseData){
    const expirationTime= new Date(new Date().getTime()+ (+userData.expiresIn*1000));
        this._user.next(new User(userData.localId,userData.email, userData.idToken, expirationTime));

  }
}
