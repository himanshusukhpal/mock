import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading=false;
  constructor(private appService: AppService, private router: Router, private loadingCtrl: LoadingController) { }
  ngOnInit() {
  }
  onLogin(){
    this.appService.networking.login();
    this.isLoading=true;
    this.loadingCtrl.create({keyboardClose:true, message:'Logging In ...'})
    .then(loadingEl=>{
      loadingEl.present();
      setTimeout(()=>{
        this.isLoading=false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/home');
      },1500);
    });
  }
}
