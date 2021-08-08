import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempPageRoutingModule } from './temp-routing.module';

import { TempPage } from './temp.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempPageRoutingModule,
    SwiperModule
  ],
  declarations: [TempPage]
})
export class TempPageModule {}
