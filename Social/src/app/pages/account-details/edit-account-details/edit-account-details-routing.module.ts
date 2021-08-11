import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAccountDetailsPage } from './edit-account-details.page';

const routes: Routes = [
  {
    path: '',
    component: EditAccountDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAccountDetailsPageRoutingModule {}
