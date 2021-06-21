/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set = async (setKey: string, setValue: string) => await Storage.set({key: setKey,value: setValue});
  get = async (getKey: string) => (await Storage.get({ key: getKey })).value;
  remove = async (remKey: string) => await Storage.remove({ key: remKey });

  setUser = async (user: Record<string, unknown>) => await this.set('user',JSON.stringify(user));
  getUser = async () => JSON.parse(await this.get('user'));
  removeUser = async () => await this.remove('user');

  setUser2 = async (user:User) => await this.set('user',JSON.stringify(user));

  seToken= async (token)=> await this.set('token',JSON.stringify(token));
  getToken= async ()=> JSON.parse(await this.get('token'));
  removeToken = async () => await this.remove('token');

}
