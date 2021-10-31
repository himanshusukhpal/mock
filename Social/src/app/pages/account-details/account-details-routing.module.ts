import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountDetailsPage } from './account-details.page';

const routes: Routes = [
  {
    path: '',
    component: AccountDetailsPage
  },  {
    path: 'edit-account-details',
    loadChildren: () => import('./edit-account-details/edit-account-details.module').then( m => m.EditAccountDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDetailsPageRoutingModule {}
