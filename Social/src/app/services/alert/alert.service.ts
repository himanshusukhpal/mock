/* eslint-disable curly */
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
    ) { }

  async presentToast(message: string, pos: 'top' | 'bottom' | 'middle' = 'top', customClass: string = null) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: pos,
      color: 'dark'
    });
    if(customClass) toast.cssClass = customClass;
    else if(pos==='top') toast.cssClass = 'topAlertClass';
    else if(pos==='bottom') toast.cssClass = 'bottomAlertClass';
    toast.present();
  }

  async presentAlert(alerto) {
    const alert = await this.alertCtrl.create({
      header: alerto.header,
      cssClass: alerto.customClass,
      message: alerto.message,
      inputs: alerto.inputs,
      buttons: alerto.buttons,
      backdropDismiss: alerto.backdropDismiss
    });
    alert.present();
  }

}
