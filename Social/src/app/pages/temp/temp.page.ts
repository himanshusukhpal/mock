import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-temp',
  templateUrl: './temp.page.html',
  styleUrls: ['./temp.page.scss'],
})
export class TempPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSwiper(swiper) {
    swiper.nextSlide();
    console.log(swiper);
  }
  onSlideChange() {
    
    console.log('slide change');
  }

}
