import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  baseURL = 'https://synans-social-project-default-rtdb.firebaseio.com/';

  users = 'users';

  constructor() { }

  getUserCRUDUrl = (userId: string, token: string) => this.baseURL + this.users + '/' + userId + '.json?auth=' +token;

}
