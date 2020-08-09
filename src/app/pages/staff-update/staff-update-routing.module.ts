import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffUpdatePage } from './staff-update.page';

const routes: Routes = [
  {
    path: '',
    component: StaffUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffUpdatePageRoutingModule {}
