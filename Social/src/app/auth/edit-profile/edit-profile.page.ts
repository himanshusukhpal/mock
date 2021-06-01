/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {


  constructor(private appservice: AppService) { }
  ngOnInit() {
    console.log(this.appservice.auth.userData);
  }
  element: User={email: this.appservice.auth.userData.email,
    id:this.appservice.auth.userData.id,
    token:this.appservice.auth.userData.token,
     tokenExpirationDate:this.appservice.auth.userData.tokenExpirationDate};


  editProfile(form: NgForm){
    console.log(form.value.fname);
    console.log(this.element.fname);
    this.element.fname=form.value.fname;
    console.log(this.element.fname);
    this.element.lname=form.value.lname;
    this.element.phone=form.value.phone;
    this.element.address=form.value.address;
    this.appservice.data.userdetails.push(this.element);
    console.log(this.appservice.data.userdetails);
    this.appservice.nav.navigateForward('auth/profile');
  }
}
