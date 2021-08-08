import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempPage } from './temp.page';

const routes: Routes = [
  {
    path: '',
    component: TempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempPageRoutingModule {}
