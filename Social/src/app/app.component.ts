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
    this.checkUser();
  }

  async checkUser() {
    // let user = await this.appService.store.getUser();
    // if (user && user['status_code']==="success") {
    //   this.appService.auth.isLoggedIn = true;
    //   this.appService.data.userDataSync(user);
    //   if(!(await this.appService.data.checkStoreVersion())) await this.appService.data.removeUserAppData();
    //   this.appService.data.userAppDataSync(user);
    // } else {
    //   this.appService.nav.navigateBack("login");
    //   this.appService.auth.logout();
    // }
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
    })
    // .catch(()=>this.appService.analytics.logEvent("app_init_error",{
    //   SCREEN_NAME: "AppRoot",
    //   SUCCESS:0,
    // }));
  }

}
