/* eslint-disable max-len */
import { Component } from '@angular/core';
import { AppService } from './services/app.service';

import { Platform } from '@ionic/angular';

import { SplashScreen } from '@capacitor/splash-screen'

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
    SplashScreen.show();
    this.initializeApp();
    this.appService.auth.checkUser();
  }

  async initializeApp() {
    this.platform.ready()
    .then(() => {
      this.appService.setStatusBar();
      this.appService.setContext();
      // this.appService.data.master_sync();
      // this.appService.pushNotificationSetup();
      // this.appService.appExitSetup();
      // this.appService.initTranslate();
      SplashScreen.hide();
    });
    // .catch(()=>this.appService.analytics.logEvent("app_init_error",{
    //   SCREEN_NAME: "AppRoot",
    //   SUCCESS:0,
    // }));
  }

}
