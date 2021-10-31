/* eslint-disable max-len */
import { Component } from '@angular/core';
import { AppService } from './services/app.service';

import { Platform } from '@ionic/angular';

import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userDetails: any;
  id: any;
  token: any;

  constructor(
    private platform: Platform,
    private appService: AppService
  ) {
    this.appService.store.getUser().then(res=>{this.id=res.id;
      console.log(this.id);});
    SplashScreen.show();
    this.initializeApp();
    SplashScreen.hide();
  }

  initializeApp() {
    this.platform.ready()
    .then(() => {
      this.appService.setStatusBar();
      this.appService.setContext();
      this.appService.auth.checkUser();
      this.appService.data.userAppDataSync();

    });
  }

}
