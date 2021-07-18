/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{

  constructor(private appservice: AppService, private http: HttpClient, private pc: PopoverController) { }
  element1: User={};
  getdata ={};
  id;

  ngOnInit() {
    console.log('in init');
    this.appservice.store.getUser().then(res=>{console.log(res.uid);
      this.id=(res.uid);
      console.log(this.id);
     // console.log(res.uid,'data');
     });
//this.fetchUser();
  }

  async ionViewWillEnter(){
  // this.appservice.data.userData.subscribe(res=>{
  //   this.profileImageUrl=res.profilePicUrl
  //   this.element1=res
  // })
    console.log('In view');
   
   this.fetchUser();
    
  }

  profileImageUrl;

  edit(){
    //console.log(this.locate);
    this.appservice.nav.navigateForward('profile/edit-profile');
  }
  home(){
    console.log('home');
    this.appservice.nav.navigateBack('home');
  }

  async fetchUser(){
    console.log(this.id,'this');
    this.element1 =await this.appservice.store.getUser();
    this.profileImageUrl=this.element1.profileImageUrl
    console.log('ELement: ',this.element1);

  }

  async popover(ev:any){
    const popover = await this.pc.create({  
      component: PopoverComponent,  
      event: ev,  
      animated: true,  
      showBackdrop: true  
  });  
  return await popover.present();  
  }

}
