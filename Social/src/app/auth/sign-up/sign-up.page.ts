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


  constructor( private appService: AppService){ }

  ngOnInit() {
  }
  login(){
    this.appService.nav.navigateForward('/auth/login');
  }
  async onSignup(form: NgForm){
    this.appService.auth.signup(form.value.email,form.value.password).subscribe(resdata=>{
      console.log(resdata);
      console.log('Hi');
         this.appService.presentLoading('Logging In ...');
        console.log('Hi');
         this.appService.dimissLoading();
        this.appService.login();
    this.appService.nav.navigateForward('home/dashboard');
        });

  }

  // showAlert(){
  //   this.appService.alert.presentAlert({'Authentication failed' ,message, ['Okay']});
  // }
}
