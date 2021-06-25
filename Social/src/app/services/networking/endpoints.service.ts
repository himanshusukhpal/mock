import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  baseURL = 'https://synans-social-project-default-rtdb.firebaseio.com/';

  users = 'users';

  events= 'events';

  constructor() { }

  getUserCRUDUrl = (userId: string, token: string) => this.baseURL + this.users + '/' + userId + '.json?auth=' +token;

  eventDetailUrl= (token: string, params:string)=> this.baseURL+ this.events + '.json'+params;
}
