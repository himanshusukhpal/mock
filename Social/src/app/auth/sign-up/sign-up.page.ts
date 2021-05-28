/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

fullname: string;
username: string;
userdetails: any[]=[];
  constructor( private appService: AppService){ }

  ngOnInit() {
  }
  login(){
    this.appService.nav.navigateForward('/auth/login');
  }
  async onSignup(form: NgForm){

    this.userdetails.push({name:form.value.name,username:form.value.username,email:form.value.email});
    this.appService.presentLoading('Logging In ...');

    this.appService.auth.signup(form.value.email,form.value.password).subscribe(resdata=>{
      console.log(resdata);
         this.appService.dimissLoading();
    this.appService.nav.navigateForward('auth/profile');
        },errorRes=>{
          this.appService.dimissLoading();
          const code= errorRes.error.error.message;
          let message='Can\'t Sign you Up, please try again!';
          if (code==='EMAIL_EXISTS'){message='This Email already exists!';}
          this.showAlert(message);
          form.reset();
        });

  }

  showAlert(message: string){
    const alerto={header: 'Authentication Failed!',message: message, buttons: ['Okay']};
    this.appService.alert.presentAlert(alerto);
  }
}
