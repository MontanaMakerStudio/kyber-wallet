import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasskeyPageRoutingModule } from './passkey-routing.module';

import { PasskeyPage } from './passkey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasskeyPageRoutingModule
  ],
  declarations: [PasskeyPage]
})
export class PasskeyPageModule {}
