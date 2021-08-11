import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SuperTabsModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, ActivityDetailComponent ],
  entryComponents: [ActivityDetailComponent]
})
export class HomePageModule {}
