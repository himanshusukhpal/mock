/* eslint-disable max-len */
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

  eventDetailUrl = (id: string) => this.baseURL + this.events + '/'+ id + '.json';

  startEventsListUrl = (limit: number) => this.baseURL + this.events + `.json?orderBy="$key"&limitToFirst=${limit}`;

  loadMoreEventsUrl = (startAfter: string, limit: number)=> this.baseURL + this.events + `.json?orderBy="$key"&startAt="${startAfter}"&limit=${limit}`;

  addEventUrl= ()=> this.baseURL + this.events + `.json`;

}
