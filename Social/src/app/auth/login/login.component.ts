import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginSubmit = false;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required]]
  });

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  get loginFormError() {
    return this.loginForm.controls;
  }

  revealPass = (password,eye) => this.appService.revealPass(password,eye);

  async onLogin() {
    this.loginSubmit = true;
    const form = this.loginForm;
    if (form.valid) {
      this.appService.auth.emailLogin(form.value.email, form.value.password);
    }
  }

  navToSignup = () => this.appService.nav.navigateForward('sign-up');
}
