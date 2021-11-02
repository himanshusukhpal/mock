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

  myEventsListUrl =(hostId: string, limit: number) => this.baseURL + this.events + `.json?orderBy="HostId"&equalTo=${hostId}&limitToFirst=${limit}`;

  loadMoreEventsUrl = (startAfter: string, limit: number)=> this.baseURL + this.events + `.json?orderBy="$key"&startAt="${startAfter}"&limit=${limit}`;

  //loadMoreMyEventsUrl = (hostId:string, startAfter: string, limit: number)=> this.baseURL + this.events + `.json?orderBy="HostId"&equalTo=${hostId}&startAt="${startAfter}"&limit=${limit}`;

  addEventUrl= (token: string)=> this.baseURL + this.events + `.json?auth=`+token;

  addGuestsToEventUrl=(key: string, id: string)=>this.baseURL + this.events + '/' + key + '/guestList/'+ id+'.json';

  updateRequestStatusUrl=(key: string, id: string)=>this.baseURL + this.events + '/' + key + '/guestList/'+ id+'.json';

  interestsUrl = () => `${this.baseURL}/interests.json`;


}
