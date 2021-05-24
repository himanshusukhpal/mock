/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated=false;
  get authenticated(){
    return this._isAuthenticated;
  }
  constructor() { }
  login(){
    this._isAuthenticated=true;
  }
  logout(){
    this._isAuthenticated=false;
  }
}
