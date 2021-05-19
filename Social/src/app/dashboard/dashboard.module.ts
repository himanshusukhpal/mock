import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage,ActivityDetailComponent],
  entryComponents: [ActivityDetailComponent]
})
export class DashboardPageModule {}
