/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {

  private _isAuthenticated=false;
  get authenticated(){
    return this._isAuthenticated;
  }

  activity: number;
  constructor() { }
  login(){
    this._isAuthenticated=true;
  }
  logout(){
    this._isAuthenticated=false;
  }
}
