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

  setUser = async (user: User) => await Storage.set({ key: 'user', value: JSON.stringify(user) });
  getUser = async () => JSON.parse((await Storage.get({ key: 'user'})).value);
  removeUser = async () => await Storage.remove({ key:'user' });

}
