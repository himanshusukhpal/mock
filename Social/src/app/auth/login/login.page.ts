/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  Signup(){
    this.appService.nav.navigateForward('/auth/sign-up');
  }
  async onLogin(form: NgForm){
    this.appService.presentLoading('Logging In ...');
    this.appService.auth.login(form.value.email,form.value.password).subscribe(resdata=>{
      console.log(resdata);
         this.appService.dimissLoading();
    this.appService.nav.navigateForward('home/dashboard');
        },errorRes=>{
          this.appService.dimissLoading();
          const code= errorRes.error.error.message;
          let message='Login failed, please try again!';
          if (code==='INVALID_PASSWORD'){message='Wrong email or password!';}
          this.showAlert(message);
          form.reset();
        }
        );
  }
showAlert(message: string){
  const alerto={header: 'Authentication Failed!',message: message, buttons: ['Okay']};
  this.appService.alert.presentAlert(alerto);
}

  }

