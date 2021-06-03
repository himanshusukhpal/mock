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
  element=[];

  ngOnInit() {
    this.fetchUser();
  }
  ionViewDidEnter(){

    console.log('in view');
    this.fetchUser();
    console.log(this.element);
  }

  profileImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';

  edit(){
    //console.log(this.locate);
    this.appservice.nav.navigateForward('auth/edit-profile');
  }

  fetchUser(){
    this.http.get<User>('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json')
    .pipe(map(resData=>
      {//console.log(resData.email);
        const user=[];
        for (const key in resData){
          if(resData[key].email===this.appservice.auth.email)
          {user.push({userID:key,email:resData[key].email, ...resData[key]});}

        }
        //console.log('User',user);
       // this.element=user[0];
       // console.log(this.element);
        return user;
      }))
    .subscribe(users=>{ this.element=(users);
      console.log(users);
      console.log('User',this.element);
     }
    );
    console.log(this.element);

  }

}
