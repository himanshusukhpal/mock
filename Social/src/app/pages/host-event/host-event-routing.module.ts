import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostEventPage } from './host-event.page';

const routes: Routes = [
  {
    path: '',
    component: HostEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostEventPageRoutingModule {}
