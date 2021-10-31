import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { IonicSwiper, PopoverController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AppService } from 'src/app/services/app.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
import { PopoverComponent } from '../popover/popover.component';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {

  constructor(private appservice: AppService, private http: HttpClient, private pc: PopoverController, private storage: AngularFireStorage) { }
  element1: User={};
  getdata ={};
  id;
  ngOnInit() {
    this.appservice.store.getUser().then(res=>{console.log(res.uid);
      this.id=(res.uid);
      console.log(this.id);
     // console.log(res.uid,'data');
     });
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
      this.appservice.nav.navigateForward('home/account-details/edit-account-details');
    }
    home(){
      console.log('home');
      this.appservice.nav.navigateBack('profile');
    }

    async fetchUser(){
      console.log(this.id,'this');
      this.element1 =await this.appservice.store.getUser();
      this.profileImageUrl=this.element1.profileImageUrl;
      console.log('ELement: ',this.element1);

    }

    async popover(ev: any){
      const popover = await this.pc.create({
        component: PopoverComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
    }

  // onSwiper(swiper) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
}
