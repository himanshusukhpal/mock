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

  async presentToast(message: string, pos: 'top' | 'bottom' | 'middle' = 'top') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: pos,
      color: 'dark'
    });
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
