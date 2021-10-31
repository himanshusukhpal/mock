import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule, IonicSwiper } from '@ionic/angular';

import { AccountDetailsPageRoutingModule } from './account-details-routing.module';

import { AccountDetailsPage } from './account-details.page';
import { PopoverComponent } from '../popover/popover.component';
import { Popover2Component } from '../popover2/popover2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDetailsPageRoutingModule,
    SwiperModule,

  ],
  entryComponents:[PopoverComponent,Popover2Component ],
  declarations: [AccountDetailsPage, PopoverComponent, Popover2Component]
})
export class AccountDetailsPageModule {}
