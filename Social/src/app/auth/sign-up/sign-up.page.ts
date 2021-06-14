/* eslint-disable max-len */
/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

fullname: string;
token: string;

userdetails: User={};
  constructor( private appService: AppService, private http: HttpClient){ }

  ngOnInit() {
  }
  login(){
    this.appService.nav.navigateForward('/auth/login');
  }
  // async onSignup(form: NgForm){

  //   this.userdetails.push({name:form.value.name,username:form.value.username,email:form.value.email});
  //   this.appService.presentLoading('Logging In ...');

  //   this.appService.auth.signup(form.value.email,form.value.password).subscribe(resdata=>{
  //     console.log(resdata);
  //        this.appService.dismissLoading();
  //   this.appService.nav.navigateForward('auth/profile');
  //       },errorRes=>{
  //         this.appService.dismissLoading();
  //         const code= errorRes.error.error.message;
  //         let message='Can\'t Sign you Up, please try again!';
  //         if (code==='EMAIL_EXISTS'){message='This Email already exists!';}
  //         this.showAlert(message);
  //         form.reset();
  //       });

  // }
  onSignup(form: NgForm){
    //this.appService.auth..username=form.value.username;
    this.appService.presentLoading('Logging In ...');
    this.appService.auth.signup(form.value.email, form.value.password)
    .then(async (res) => {
      console.log('then');
      this.userdetails=this.appService.auth.userdetails;
      this.userdetails.username=form.value.username;
      console.log(this.userdetails);
      this.appService.store.setUser(this.userdetails);
      this.appService.store.seToken(this.appService.auth.userToken);
      await this.appService.store.getToken().then(token=>{this.token=token;});
      this.http.put('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.userdetails.id+'.json?auth='+this.token,this.userdetails).subscribe(
        resData=>{
          console.log(resData);
          this.appService.nav.navigateForward('auth/profile');
        });

    }
    ).catch((error) => {
      this.appService.dismissLoading();
      this.showAlert(error.message);
      form.reset();
    }
    ).finally(()=>{
      console.log('finally');
      this.appService.dismissLoading();
    }
    );
    console.log('on signup');

}

  showAlert(message: string){
    const alerto={header: 'Authentication Failed!',message: message, buttons: ['Okay']};
    this.appService.alert.presentAlert(alerto);
  }

}

