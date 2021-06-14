/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */

import { Injectable, Component } from '@angular/core';
import { NavController, ModalController, LoadingController, Platform, isPlatform } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth/auth.service';
import { CallsService } from './networking/calls.service';
import { EndpointsService } from './networking/endpoints.service';
import { DataService } from './data/data.service';
import { StorageService } from './storage/storage.service';
import { AlertService } from './alert/alert.service';

import { App } from '@capacitor/app';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import { StatusBar } from '@capacitor/status-bar';
import { Geolocation } from '@capacitor/geolocation';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from '@capacitor/push-notifications'


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
    public modal: ModalController,
    public platform: Platform,
  ) { }


  pushNotificationSetup() {
    if(!isPlatform('desktop') && !isPlatform('mobileweb')) {

      // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting
      PushNotifications.requestPermissions().then( result => {
        if (result.receive) {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // Show some error
        }
      });

      // On success, we should be able to receive notifications
      PushNotifications.addListener('registration', (token: Token) => {
        console.log("token:",token.value)
      });

      // Some issue with our setup and push will not work
      PushNotifications.addListener('registrationError', (error: any) => {
        this.alert.presentToast("Push Notifications not registered");
        console.log(error);
      });

      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
        this.alert.presentAlert({
          header: notification.title,
          message: notification.body,
          buttons: [{text:'Close',role:'cancel'}]
        })
      });

      // Method called when tapping on a notification
      PushNotifications.addListener('pushNotificationActionPerformed', (notificationAction: ActionPerformed) => {
        let title = null;
        let body = null;
        if(notificationAction.notification.title) title = notificationAction.notification.title;
        else if (notificationAction.notification.data.title) title = notificationAction.notification.data.title;
        if(notificationAction.notification.body) body = notificationAction.notification.body;
        else if(notificationAction.notification.data.body) body = notificationAction.notification.data.body;
        if(title || body) {
          this.alert.presentAlert({
            header: notificationAction.notification.title,
            message: notificationAction.notification.body,
            buttons: [{text:'Close',role:'cancel'}]
          })
        }
      });

    }
  }

  setStatusBar() {
    if ( !isPlatform('desktop') && !isPlatform('mobileweb') ) {
      StatusBar.setBackgroundColor({
        color: '#385d69'
      });
    }
  }

  backbuttonSubscribeMethod(action:string) {
    switch (action) {
      case "exit" :
        let a = 0;
        this.platform.backButton.subscribeWithPriority(0,() => {
          if (a === 2) App.exitApp();
          else {
            a++;
            this.alert.presentToast("Press back button twice to exit","bottom");
          }
        });
      break;
      default :
        this.platform.backButton.subscribeWithPriority(2,() => {
          let modalExist = document.getElementsByTagName('ion-loading')[0];
          if(modalExist) this.dismissModal();
          else this.nav.navigateBack(action);
        });
      break;
    }
  }
  backbuttonUnsubscribe = () => this.platform.backButton.unsubscribe();

  connected = async() => (await Network.getStatus()).connected;
  getCurrentPosition = async() => await Geolocation.getCurrentPosition({enableHighAccuracy:true});

  async setContext() {
    environment.UUID = (await Device.getId()).uuid;
    environment.DEVICE = await Device.getInfo();
    this.getCurrentPosition().then(
      res=> {
        environment.LOC.accuracy = res.coords.accuracy;
        environment.LOC.altitude = res.coords.altitude;
        environment.LOC.altitudeAccuracy = res.coords.altitudeAccuracy;
        environment.LOC.heading = res.coords.heading;
        environment.LOC.latitude = res.coords.latitude;
        environment.LOC.longitude = res.coords.longitude;
        environment.LOC.speed = res.coords.speed;
      }
    )
    console.log(environment);
  }
  getAppVer = () => environment.VERSION;

  public toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  limitToDecimal = (val,d:number=2) => {
    let x = Math.pow(10,d);
    return (Math.round(val*x))/x
  }

  dateCheck(date_tc) {
    let dateNow = new Date();
    if(date_tc<dateNow) return false
    else return true;
  }
  changeDate = (date,format:string) => formatDate(date, format, 'en-US');

  async presentLoading(msg:string) {
    const loading = await this.load.create({
      cssClass: 'my-custom-class',
      message: msg,
    });
    await loading.present();
  }
  dismissLoading = async() => setTimeout(async() => await this.load.dismiss());

  async presentModal(show_component,input_obj:Object) {
    const modal = await this.modal.create({
      component: show_component,
      cssClass: 'modal-class',
      componentProps: input_obj
    });
    return await modal.present();
  }
  async dismissModal(modalData=null) {
    this.modal.dismiss({
      'dismissed': true,
      'data': modalData
    });
  }

}
