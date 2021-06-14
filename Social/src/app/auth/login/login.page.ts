/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private appService: AppService,private http: HttpClient) { }
  userdata={};
  newdata={};
  id: string;
  token: string;

  ngOnInit() {
  }
  Signup(){
    this.appService.nav.navigateForward('/auth/sign-up');
  }
  // async onLogin(form: NgForm){
  //   this.appService.presentLoading('Logging In ...');
  //   this.appService.auth.login(form.value.email,form.value.password).subscribe(resdata=>{
  //     console.log(resdata);
  //        this.appService.dismissLoading();
  //   this.appService.nav.navigateForward('home/dashboard');
  //       },errorRes=>{
  //         this.appService.dismissLoading();
  //         const code= errorRes.error.error.message;
  //         let message='Login failed, please try again!';
  //         if (code==='INVALID_PASSWORD'){message='Wrong email or password!';}
  //         this.showAlert(message);
  //         form.reset();
  //       }
  //       );
  // }

  async onLogin(form: NgForm) {
    this.appService.presentLoading('Logging In ...');
    await this.appService.auth.login(form.value.email, form.value.password)
      .then ( async (res) => {
        //console.log(res);
          this.appService.dismissLoading();
           this.appService.nav.navigateForward('home/dashboard');
           this.id=this.appService.auth.userdetails.id;
           console.log(this.id,'id');
           this.appService.store.seToken(this.appService.auth.userToken);
           await this.appService.store.getToken().then(token=>{this.token=token;
          console.log(token,'token1');});

           this.userdata = await this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.id+'.json?auth='+this.token).toPromise();
           console.log(this.userdata);

           await this.appService.store.setUser(this.userdata);
            this.appService.store.getUser().then(res1=>{console.log(res1.id,'data');});
            //console.log(this.newdata,'data');
          //console.log('ji');
        }
      ).catch((error) => {
        this.appService.dismissLoading();
        this.showAlert(error.message);
        form.reset();
      });
      //this.appService.data.email=this.appService.auth.email;
  }
  showAlert(message: string){
    const alerto={header: 'Authentication Failed!',message: message, buttons: ['Okay']};
    this.appService.alert.presentAlert(alerto);
  }

}

