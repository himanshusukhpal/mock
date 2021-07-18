/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user.model';
import { PopoverController } from '@ionic/angular';
import { Popover2Component } from '../../popover2/popover2.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(private appservice: AppService, private pc: PopoverController) { }
  userDetails: User={};
  token: string;
  id
  profileImageUrl;

  ngOnInit() {
    console.log(this.profileImageUrl)
    this.callUser();

  }

  async popover(ev:any){
    const popover = await this.pc.create({  
      component: Popover2Component,  
      event: ev,  
      animated: true,  
      showBackdrop: true  
  });  
  popover.onDidDismiss().then(res=>{this.profileImageUrl=res['data']})
  return await popover.present(); 
 
  }


async callUser(){
  await this.appservice.store.getUser().then(res1=>{
    this.userDetails=res1;
    this.id = res1.id;
    this.token = res1.token;
    this.profileImageUrl=res1.profileImageUrl
  });
  console.log(this.userDetails,'before');

}
back(){
  this.appservice.nav.navigateBack('profile');
}
  async editProfile(form: NgForm){
    console.log(form.value)
    this.userDetails.fname=form.value.fname;
    
    this.userDetails.lname=form.value.lname;
    this.userDetails.address=form.value.address;
    this.userDetails.phone=form.value.phone;
    this.userDetails.username=form.value.username;
    this.userDetails.profileImageUrl=this.profileImageUrl;
    console.log(this.userDetails,'after');
    this.appservice.store.setUser2(this.userDetails); 
    this.appservice.calls.userCreateCall2(this.id,this.token,this.userDetails).subscribe(res=>
     {this.appservice.nav.navigateForward('profile');});
    
}

}
