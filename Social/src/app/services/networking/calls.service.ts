/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';

import { EndpointsService } from './endpoints.service';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class CallsService {

  constructor(
    private http: HttpClient,
    private ends: EndpointsService,
    private ngFireAuth: AngularFireAuth,
  ) { }

  emailSignUpCall = (email: string, password: string) => this.ngFireAuth.createUserWithEmailAndPassword(email, password);

  emailLoginCall = (email: string, password: string) => this.ngFireAuth.signInWithEmailAndPassword(email, password);

  userCreateCall = (userId: string, token: string, user: Record<string, unknown>) => this.http.put( this.ends.getUserCRUDUrl(userId,token) , user );

  userDetailCall = (userId: string, token: string) => this.http.get( this.ends.getUserCRUDUrl(userId,token) );

  userCreateCall2 = (userId: string, token: string, user: User) => this.http.put( this.ends.getUserCRUDUrl(userId,token) , user );

  eventListCall =(token:string,params:string, event: any)=>this.http.post(this.ends.eventDetailUrl(token,params), event);

  getEventListCall=(token:string,params:string)=>this.http.get<[]>(this.ends.eventDetailUrl(token,params));

  getEventbyId=(id:string)=>this.http.get(this.ends.eventUrl(id));
}
