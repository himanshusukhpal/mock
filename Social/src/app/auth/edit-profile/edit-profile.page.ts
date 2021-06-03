/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {


  constructor(private appservice: AppService, private http: HttpClient) { }
  ngOnInit() {
    //console.log(this.appservice.auth.userData);
  }
  element: User={email: this.appservice.auth.userData.email,
    id:this.appservice.auth.userData.id,
    token:this.appservice.auth.userData.token,
     tokenExpirationDate:this.appservice.auth.userData.tokenExpirationDate};


  editProfile(form: NgForm){
    //console.log(form.value.fname);

    this.appservice.data.userdetails.fname=form.value.fname;
    this.appservice.data.userdetails.lname=form.value.lname;
    this.appservice.data.userdetails.address=form.value.address;
    this.appservice.data.userdetails.phone=form.value.phone;
    this.appservice.data.userdetails.email=this.appservice.auth.email;
    this.appservice.data.userdetails.username=form.value.username;


    //console.log(this.appservice.data.userdetails);
    this.http.get('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json')
    .pipe(map(resFetch=>{
      let found=false;
      for(const key in resFetch){
        if(resFetch[key].email===this.appservice.auth.email){
          //..
          //console.log(key);
          found=true;
          console.log('in if');
          this.http.put('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+key+'.json',this.appservice.data.userdetails).subscribe(editres=>{console.log(editres);
        });
          //console.log('https://synans-social-project-default-rtdb.firebaseio.com/userDetail/'+key+'.json');
          break;
        }

      }
      if(found===false){
          console.log('in else');
          this.http.post('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json',this.appservice.data.userdetails).subscribe(res=>{//console.log(res);
        });
      }

    })).subscribe(resdata=>{});
    //this.http.post('https://synans-social-project-default-rtdb.firebaseio.com/userDetail.json',this.appservice.data.userdetails).subscribe(res=>{console.log(res);});
    //this.appservice.auth.update(this.appservice.data.userdetails);
    this.appservice.nav.navigateForward('auth/profile');
  }

}
