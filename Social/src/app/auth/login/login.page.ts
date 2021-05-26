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

        console.log('Hi');
         this.appService.dimissLoading();
        this.appService.login();
    this.appService.nav.navigateForward('home/dashboard');
        },
        );
  }
  }

