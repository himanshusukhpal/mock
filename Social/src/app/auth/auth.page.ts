import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading=false;
  login= true;
  constructor(
    private appService: AppService
  ) { }
  ngOnInit() {
  }
   async onLogin(){
    this.appService.login();
    this.isLoading=true;
    await this.appService.presentLoading("Logging In ...",1500);
    this.appService.nav.navigateForward("home/dashboard");
    await this.appService.dimissLoading();
  }
  onSwitch(){
    this.login=!this.login;
  }
   onSubmit(form: NgForm){
    console.log(form.value.email);
    console.log(form.value.password);
  }
  }
