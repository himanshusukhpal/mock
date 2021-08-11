import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAccountDetailsPageRoutingModule } from './edit-account-details-routing.module';

import { EditAccountDetailsPage } from './edit-account-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAccountDetailsPageRoutingModule
  ],
  declarations: [EditAccountDetailsPage]
})
export class EditAccountDetailsPageModule {}
