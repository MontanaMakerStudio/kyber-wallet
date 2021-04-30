import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitLandingPhonePageRoutingModule } from './init-landing-phone-routing.module';

import { InitLandingPhonePage } from './init-landing-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitLandingPhonePageRoutingModule
  ],
  declarations: [InitLandingPhonePage]
})
export class InitLandingPhonePageModule {}
