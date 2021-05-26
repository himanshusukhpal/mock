import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading=false;
  login= true;

  constructor(
    private appService: AppService, private roue: Router) { }

  ngOnInit() {
    this.appService.nav.navigateForward('auth/login');

  }
  async dashboard(){
    console.log('In');
    await this.appService.nav.navigateBack('home/dashboard');
    //this.roue.navigateByUrl('home/dashboard');
  }

  async onLogin(){
     this.appService.login();
     this.isLoading=true;
   // await this.appService.presentLoading('Logging In ...');
    this.appService.nav.navigateForward('home/dashboard');
    // await this.appService.dimissLoading();
  }

  onSwitch(){
    this.login=!this.login;
  }

  onSubmit(form: NgForm){
    console.log(form.value.email);
    console.log(form.value.password);
  }

}
