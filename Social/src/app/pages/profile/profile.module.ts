import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { PopoverComponent } from '../popover/popover.component';
import { Popover2Component } from '../popover2/popover2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  entryComponents:[PopoverComponent,Popover2Component ],
  declarations: [ProfilePage, PopoverComponent, Popover2Component]
})
export class ProfilePageModule {}
