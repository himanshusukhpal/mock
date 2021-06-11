/* eslint-disable max-len */
import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userDetails: any;
  id: any;
  token: any;
  constructor(private appService: AppService, private http: HttpClient) {}
  onProfile(){
    this.appService.nav.navigateForward('auth/profile');
  }
  onHome(){
    this.appService.nav.navigateForward('home');
  }
  async onLogout(){
    this.appService.auth.signOut();
    await this.appService.store.getUser().then(res=>{this.userDetails=res;
    this.id=res.id;});

    console.log(this.userDetails);
    await this.appService.store.getToken().then(token=>{this.token=token;});

   this.http.put('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.id+'.json?auth='+this.token,this.userDetails).subscribe(res1=>{this.appService.nav.navigateBack('auth/login');});
    this.appService.store.removeUser();
   // this.appService.nav.navigateBack('auth/login');
  }
}
