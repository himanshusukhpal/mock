
import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
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
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit{
  
  constructor(private pc : PopoverController, private appService:AppService) { }

  ngOnInit() {
  }
  onSwiper(swiper) {
    console.log(swiper,"a");
    swiper.slideNext();
  }
  onSlideChange() {
    console.log('slide change');
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

  back=()=>{this.appService.nav.navigateBack('home');}
}