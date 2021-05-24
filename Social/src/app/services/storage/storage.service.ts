import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUser = async(user:{}) => await Storage.set({ key: 'user', value: JSON.stringify(user) });
  getUser = async() => JSON.parse((await Storage.get({ key: 'user'})).value);
  removeUser = async() => await Storage.remove({ key:'user' });

}
