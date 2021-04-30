import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitAuthCodePageRoutingModule } from './init-auth-code-routing.module';

import { InitAuthCodePage } from './init-auth-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitAuthCodePageRoutingModule
  ],
  declarations: [InitAuthCodePage]
})
export class InitAuthCodePageModule {}
