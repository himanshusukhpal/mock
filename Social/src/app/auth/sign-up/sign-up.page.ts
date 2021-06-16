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

  get signUpFormError() {
    return this.signUpForm.controls;
  }

  revealPass = (password,eye) => this.appService.revealPass(password,eye);

  onSignup() {
    const form = this.signUpForm;
    this.signUpSubmit = true;
    if(form.valid) {
      this.appService.auth.emailSignUp(form.value);
    }
  }

  navToLogin = () => this.appService.nav.navigateForward('login');

}

