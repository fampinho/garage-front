import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffUpdatePageRoutingModule } from './staff-update-routing.module';

import { StaffUpdatePage } from './staff-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffUpdatePageRoutingModule
  ],
  declarations: [StaffUpdatePage]
})
export class StaffUpdatePageModule {}
