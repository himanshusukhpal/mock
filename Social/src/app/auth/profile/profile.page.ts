/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{

  constructor(private appservice: AppService, private http: HttpClient) { }
  //element=this.appservice.data.fetchedUser.asObservable();
  element1=[];
  email=this.appservice.auth.email;
  ngOnInit() {
    console.log('in init');
//this.fetchUser();
  }
  ionViewWillEnter(){
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

  fetchUser(){
    this.http.get<User>('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json?auth='+this.appservice.auth.userToken)
    .pipe(map(resData=>
      {//console.log(resData.email);
        const user=[];
        for (const key in resData){
          console.log(this.email);
          if(resData[key].email===this.appservice.auth.email)
          {user.push({userID:key,email:resData[key].email, ...resData[key]});}

        }
        //console.log('User',user);
       // this.element=user[0];
       // console.log(this.element);
        return user;
      }))
    .subscribe(users=>{
      //this.appservice.data.fetchedUser.next(users);
      //this.element1=(users);
      console.log(users);
      this.element1=(users);
      //console.log(this.element1+'x');
      //console.log('User',this.element);
     }
    );
    //console.log(this.element);

  }

}
