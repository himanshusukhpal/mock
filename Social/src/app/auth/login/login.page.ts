import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  navToSignup(){
    this.appService.nav.navigateForward('sign-up');
  }

  async onLogin(form: NgForm) {
    this.appService.auth.emailLogin(form.value.email, form.value.password);
  }

}

