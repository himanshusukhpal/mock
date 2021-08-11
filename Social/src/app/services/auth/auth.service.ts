/* eslint-disable curly */
import { Injectable, NgZone } from '@angular/core';

import { NavController, LoadingController } from '@ionic/angular';

import { AlertService } from '../alert/alert.service';
import { DataService } from './../data/data.service';
import { CallsService } from '../networking/calls.service';
import { StorageService } from '../storage/storage.service';


interface AuthResponseData{
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = true;

  constructor(
    private alert: AlertService,
    private data: DataService,
    private calls: CallsService,
    private store: StorageService,
    private nav: NavController,
    private load: LoadingController
  ) { }

  async presentLoading(msg: string) {
    const loading = await this.load.create({
      cssClass: 'my-custom-class',
      message: msg,
    });
    await loading.present();
  }
  dismissLoading = async () => setTimeout(async () => await this.load.dismiss());

  async checkUser() {
    const user = await this.store.getUser();
    if(user && user.id) this.data.userDataSync(user);
    else this.logout();
  }

  async emailSignUp(form: Record<string,unknown>) {
    await this.presentLoading('Signing In...');
    this.calls.emailSignUpCall(form.email.toString(), form.password.toString()).then(
      async (res) => {
        if(res) {
          console.log(res);
          const uid = res.user.uid;
          const token = await res.user.getIdToken();
          delete form.password;
          form.id = uid;
          this.calls.userCreateCall(uid,token,form).subscribe(
            async (user: Record<string, unknown>)=> {
              if(user) {
                user.token = token;
                this.login(user);
              }
              else this.alert.presentToast('User not Found','top');
              await this.dismissLoading();
            },
            async (error) => {
              await this.dismissLoading();
              console.log(error);
              this.alert.presentToast(error.message,'top');
            }
          );
        }
      }
    );
  }

  async emailLogin(email: string, password: string) {
    await this.presentLoading('Logging In...');
    this.calls.emailLoginCall(email, password).then(
      async (res) => {
        if(res) {
          console.log(res);
          const refreshToken=res.user.refreshToken;
          console.log(refreshToken);
          const uid = res.user.uid;
          const token = await res.user.getIdToken();
          this.calls.userDetailCall(uid,token).subscribe(
            async (user: Record<string, unknown>)=> {
              if(user) {
                user.token = token;
                this.login(user);
              }
              else this.alert.presentToast('User not Found','top');
              await this.dismissLoading();
            },
            async (error) => {
              await this.dismissLoading();
              console.log(error);
              if(error.code==='auth/user-not-found') this.alert.presentToast('User not found','top');
              else this.alert.presentToast(error.message.split(' or ')[0],'top');
            }
          );
        }
      },
      async (error)=> {
        await this.dismissLoading();
        console.log(error);
        if(error.code==='auth/user-not-found') this.alert.presentToast('User not found','top');
        else if(error.code==='auth/wrong-password') this.alert.presentToast('Incorrect Password');
        else this.alert.presentToast(error.message.split(' or ')[0],'top');
      }
    );
  }

  async logout() {
    this.nav.navigateBack('login');
    this.isLoggedIn = false;
    this.data.removeEntireData();
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
  }

  private login(user: Record<string, unknown>) {
    this.isLoggedIn = true;
    this.data.userDataSync(user);
    this.data.userAppDataSync();
    this.nav.navigateForward('home');
  }

}
