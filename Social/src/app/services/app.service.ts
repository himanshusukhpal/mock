/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */

import { Injectable } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';

import { AuthService } from './auth/auth.service';
import { CallsService } from './networking/calls.service';
import { EndpointsService } from './networking/endpoints.service';
import { DataService } from './data/data.service';
import { StorageService } from './storage/storage.service';
import { AlertService } from './alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  activity = 1;
  activityName: string;

  constructor(
    public auth: AuthService,
    public nav: NavController,
    public data: DataService,
    public ends: EndpointsService,
    public calls: CallsService,
    public alert: AlertService,
    public store: StorageService,
    public load: LoadingController,
    public modal: ModalController
  ) { }

  private _isAuthenticated=false;
  get authenticated(){
    return this._isAuthenticated;
  }

  login(){
    this._isAuthenticated=true;
  }
  logout(){
    this._isAuthenticated=false;
  }

  async presentLoading(message: string,duration: number=null,customClass: string = null) {
    const loading = await this.load.create({
      message
    });
    if(customClass) {loading.cssClass = customClass;}
    if(duration) {loading.duration = duration;}
    await loading.present();
  }
  dimissLoading = async () => await this.load.dismiss();

  async presentModal(component,input_obj: {},customClass: string=null) {
    const modal = await this.modal.create({
      component,
      cssClass: customClass,
      componentProps: input_obj
    });
    console.log(input_obj);
    console.log('In present modal');
    return await modal.present();
  }
  dismissModal = async () => await this.modal.dismiss();

}
