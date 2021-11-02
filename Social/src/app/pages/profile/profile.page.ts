/* eslint-disable max-len */

import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Swiper,
} from 'swiper/core';
import { PopoverComponent } from '../popover/popover.component';
import { Popover2Component } from '../popover2/popover2.component';
import {Camera, CameraResultType} from '@capacitor/camera';
import {CallsService} from 'src/app/services/networking/calls.service';
import {AngularFireStorage} from '@angular/fire/storage';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit{
path;
  images;
  imageUrl: any;
  allImages=[];
  userId;

  constructor(
    private pc: PopoverController,
    private appService: AppService,
    private callsService: CallsService,
    private fireStorage: AngularFireStorage
    ) {this.appService.store.getUser().then(res=>{this.userId=res.id;
      console.log(this.userId);
    });

   }

  ngOnInit() {

    console.log(this.userId);
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 1,
     // paginationClickable: true,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    this.callsService.fetchInterestList().subscribe((res)=>{
         console.log(res);
    });
  }
  onSwiper(swiper) {
    console.log(swiper,'a');
    swiper.slideNext();
  }
  onSlideChange() {
    console.log('slide change');
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

  back=()=>{this.appService.nav.navigateBack('home');};

  async popover2(ev: any){
    const popover = await this.pc.create({
      component: Popover2Component,
      event: ev,
      animated: true,
      showBackdrop: true
  });
  // popover.onDidDismiss().then(res=>{
  //   this.images.push(res.data);
  //   console.log(this.images,'pic');
  // }
  //   );
  return await popover.present();

  }

  takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl
      });
      this.imageUrl = image.dataUrl;
      const metaData={
        contentType:'image/jpg'
      };
      this.fireStorage.ref(`/${this.userId}/${Math.floor(Math.random() * 10)}`).putString(this.imageUrl,'data_url',metaData).then(
        (res)=> {
          console.log(res);
        }
      );
    };
  }
