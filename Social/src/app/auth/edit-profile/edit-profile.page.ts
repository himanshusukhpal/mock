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
  ngOnInit() {
    //console.log(this.appservice.auth.userData
    console.log(this.appservice.auth.userdetails.id);
    this.callUser();

  }

async callUser(){
  await this.appservice.store.getUser().then(res1=>{console.log(res1,'res1');
    this.userDetails=res1;});
  console.log(this.userDetails,'before');
  //this.userDetails=await this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.appservice.auth.userdetails.id+'.json').toPromise();
  //this.element1 =await this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.appservice.auth.userdetails.id+'.json').toPromise();
  //console.log(this.userDetails);
}
  editProfile(form: NgForm){
    //console.log(form.value.fname)
    this.userDetails.fname=form.value.fname;
    this.userDetails.lname=form.value.lname;
    this.userDetails.address=form.value.address;
    this.userDetails.phone=form.value.phone;
   // this.appservice.data.userdetails.email=this.appservice.auth?.email;
    this.userDetails.username=form.value.username;
    console.log(this.userDetails,'after');
    this.appservice.store.setUser(this.userDetails);
    // this.http.put('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+this.appservice.auth.userdetails.id+'.json',this.userDetails).subscribe(res=>{
    //   console.log(res);
      this.appservice.nav.navigateBack('auth/profile');
   // });


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
