import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { IonicModule } from '@ionic/angular';

import { HostEventPageRoutingModule } from './host-event-routing.module';
import { SwiperModule } from 'swiper/angular';
import { HostEventPage } from './host-event.page';
import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HostEventPageRoutingModule,
  ],
  providers:[DatePipe],
  declarations: [HostEventPage]
})
export class HostEventPageModule {}
