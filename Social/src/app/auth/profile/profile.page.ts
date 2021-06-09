/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{

  constructor(private appservice: AppService, private http: HttpClient) { }
  //element=this.appservice.data.fetchedUser.asObservable();
  element1: User={};
  getdata ={};
  id: string;
  email=this.appservice.auth.email;
  ngOnInit() {
    console.log('in init');
//this.fetchUser();
  }
  ionViewWillEnter(){
  //   this.appservice.store.getUser().then(res=>{this.getdata=res;
  //     console.log(res);});
  //  // this.id=this.getdata.uid;
  //   console.log(this.id);
  // this.appservice.store.getUser().then(res=>{console.log(res.uid);
  //   this.id=res.uid;});
  // console.log(this.id);
    console.log('In view');
   // console.log(this.element);
    this.fetchUser();
    //console.log(this.element);
  }

  profileImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';

  edit(){
    //console.log(this.locate);
    this.appservice.nav.navigateForward('auth/edit-profile');
  }
  home(){
    this.appservice.nav.navigateBack('home/dashboard');
  }

  async fetchUser(){
    console.log(this.appservice.auth.userdetails.id);
    this.element1 =await this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.appservice.auth.userdetails.id+'.json').toPromise();
    console.log('ELement: ',this.element1);
     // this.element1=(users);
     // console.log(this.element1);
    // .pipe(map(resData=>
    //   {//console.log(resData.email);
    //     const user=[];
    //     for (const key in resData){
    //       console.log(this.email);
    //       if(resData[key].email===this.appservice.auth.email)
    //       {user.push({userID:key,email:resData[key].email, ...resData[key]});}

    //     }
    //     //console.log('User',user);
    //    // this.element=user[0];
    //    // console.log(this.element);
    //     return user;
    //   }))

    //console.log(this.element);

  }

}
