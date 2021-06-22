/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(private appservice: AppService, private http: HttpClient) { }
  userDetails: User={};
  token: string;
  id
  ngOnInit() {
    //console.log(this.appservice.auth.userData
    // console.log(this.appservice.auth.userdetails.id);
    this.callUser();

  }

async callUser(){
  await this.appservice.store.getUser().then(res1=>{console.log(res1,'res1');
    this.userDetails=res1;
    this.id = res1.id;
    console.log(this.id)
    this.token = res1.token;
    console.log(this.token);
  });
  console.log(this.userDetails,'before');
  //this.userDetails=await this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.appservice.auth.userdetails.id+'.json').toPromise();
  //this.element1 =await this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.appservice.auth.userdetails.id+'.json').toPromise();
  //console.log(this.userDetails);
}
back(){
  this.appservice.nav.navigateBack('profile');
}
  async editProfile(form: NgForm){
    //console.log(form.value.fname)
    this.userDetails.fname=form.value.fname;
    this.userDetails.lname=form.value.lname;
    this.userDetails.address=form.value.address;
    this.userDetails.phone=form.value.phone;
   // this.appservice.data.userdetails.email=this.appservice.auth?.email;
    this.userDetails.username=form.value.username;
   // await this.appservice.store.getToken().then(token=>{this.token=token;});

    console.log(this.userDetails,'after');
    this.appservice.store.setUser2(this.userDetails);
     
    this.appservice.calls.userCreateCall2(this.id,this.token,this.userDetails).subscribe(res=>
     {this.appservice.nav.navigateForward('profile');});
    // this.appservice.store.setUser(this.userDetails);
  //   this.http.put('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.appservice.auth.userdetails.id+'.json?auth='+this.token,this.userDetails).subscribe(res=>{
  //     console.log(res);
  //     this.appservice.nav.navigateBack('auth/profile');
  //  });


  //   this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json?auth='+this.appservice.auth.userToken)
  //   .pipe(map(resFetch=>{
  //     let found=false;
  //     for(const key in resFetch){
  //       if(resFetch[key].email===this.appservice.auth.email){
  //         found=true;
  //         console.log('in if');
  //         this.http.put('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+key+'.json?auth='+this.appservice.auth.userToken,this.appservice.data.userdetails
  //         ).subscribe(editres=>{console.log(editres);
  //         this.appservice.nav.navigateForward('auth/profile');
  //       });
  //         break;
  //       }

  //     }
  //     if(found===false){
  //         console.log('in else');
  //         this.http.post('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json?auth='+this.appservice.auth.userToken,this.appservice.data.userdetails).subscribe(res=>{ this.appservice.nav.navigateForward('auth/profile');//console.log(res);
  //       });
  //     }

  //   })).subscribe(resdata=>{});
  //
}

}
