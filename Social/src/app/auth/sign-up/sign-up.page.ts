/* eslint-disable max-len */
/* eslint-disable object-shorthand */
import { Component, OnInit } from '@angular/core';

import { NgForm, FormBuilder, Validators} from '@angular/forms';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  signUpSubmit = false;

  signUpForm = this.formBuilder.group({
    fullname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  navToLogin = () => this.appService.nav.navigateForward('login');

  get signUpFormError() {
    return this.signUpForm.controls;
  }

  revealPass(password, eye) {
    if(eye.name==='eye') {
      password.type='text';
      eye.name='eye-off';
    } else if (eye.name==='eye-off') {
      password.type='password';
      eye.name='eye';
    }
  }

  onSignup() {
    const form = this.signUpForm;
    this.signUpSubmit = true;
    if(form.valid) {
      this.appService.auth.emailSignUp(form.value);
    }
    //this.appService.auth..username=form.value.username;
    // this.appService.auth.emailSignUp(form.value.email, form.value.password);
    // .then(async (res) => {
    //   console.log('then');
    //   this.userdetails=this.appService.auth.userdetails;
    //   this.userdetails.username=form.value.username;
    //   console.log(this.userdetails);
    //   // this.appService.store.setUser(this.userdetails);
    //   this.appService.store.seToken(this.appService.auth.userToken);
    //   await this.appService.store.getToken().then(token=>{this.token=token;});
    //   this.http.put('https://synans-social-project-default-rtdb.firebaseio.com/users/'+this.userdetails.id+'.json?auth='+this.token,this.userdetails).subscribe(
    //   resData=>{
    //     console.log(resData);
    //     this.appService.nav.navigateForward('auth/profile');
    //   });
    // }
    // ).catch((error) => {
    //   this.appService.dismissLoading();
    //   this.showAlert(error.message);
    //   form.reset();
    // }
    // ).finally(()=>{
    //   console.log('finally');
    //   this.appService.dismissLoading();
    // }
    // );
    // console.log('on signup');
  }

  showAlert(message: string){
    const alerto={header: 'Authentication Failed!',message: message, buttons: ['Okay']};
    this.appService.alert.presentAlert(alerto);
  }

}

