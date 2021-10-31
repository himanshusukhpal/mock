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
  defaultPic='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';

  signUpForm = this.formBuilder.group({
    fname: ['', [Validators.required]],
    lname:['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  get signUpFormError() {
    return this.signUpForm.controls;
  }

  revealPass = (password,eye) => this.appService.revealPass(password,eye);

  onSignup() {
    const form = this.signUpForm;
    this.signUpSubmit = true;
    if(form.valid) {
      form.value.profileImageUrl='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';
      console.log(form.value);
      this.appService.auth.emailSignUp(form.value);
    }
  }

  navToLogin = () => this.appService.nav.navigateForward('login');

}

