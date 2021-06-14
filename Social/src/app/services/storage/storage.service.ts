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

  set = async(set_key:string,set_value:string) => await Storage.set({key: set_key,value: set_value});
  get = async(get_key:string) => { const get_value = await Storage.get({ key: get_key }); return get_value.value }
  remove = async(rem_key:string) => await Storage.remove({ key: rem_key });

  setUser = async (user: User) => await this.set("user",JSON.stringify(user));
  getUser = async () => JSON.parse(await this.get("user"));
  removeUser = async () => await this.remove("user");

  seToken= async (token)=> await this.set("token",JSON.stringify(token));
  getToken= async ()=> JSON.parse(await this.get("token"));
  removeToken = async () => await this.remove("token");

}
