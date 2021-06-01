/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private appservice: AppService) { }

  ngOnInit() {
  }
  profileImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrcSIYcfdCK1XNhHWpQfuoW5eZyUhuLBMKB5FzAWYJKbGy_XvpR4aAnPlOzYd2ptiDFw&usqp=CAU';
  profileName= this.appservice.data.username;
  profileEmail= this.appservice.data.userdetails[0].email===undefined? null:this.appservice.data.userdetails[0].email;
  contact= this.appservice.data.userdetails[0].phone===undefined? null:this.appservice.data.userdetails[0].phone ;

  firstname= this.appservice.data.userdetails[0].fname===undefined? null:this.appservice.data.userdetails[0].fname;
  lastname= this.appservice.data.userdetails[0].lname===undefined? null:this.appservice.data.userdetails[0].lname;
  locate= this.appservice.data.userdetails[0].address===undefined? null:this.appservice.data.userdetails[0].address;


  edit(){
    console.log(this.locate);
    this.appservice.nav.navigateForward('auth/edit-profile');
  }

}
