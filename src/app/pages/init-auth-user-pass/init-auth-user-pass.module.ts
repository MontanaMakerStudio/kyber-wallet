import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitAuthUserPassPageRoutingModule } from './init-auth-user-pass-routing.module';

import { InitAuthUserPassPage } from './init-auth-user-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitAuthUserPassPageRoutingModule
  ],
  declarations: [InitAuthUserPassPage]
})
export class InitAuthUserPassPageModule {}
