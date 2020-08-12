import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffRegisterPageRoutingModule } from './staff-register-routing.module';

import { StaffRegisterPage } from './staff-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffRegisterPageRoutingModule
  ],
  declarations: [StaffRegisterPage]
})
export class StaffRegisterPageModule {}
