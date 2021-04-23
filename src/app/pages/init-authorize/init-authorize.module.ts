import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitAuthorizePageRoutingModule } from './init-authorize-routing.module';

import { InitAuthorizePage } from './init-authorize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitAuthorizePageRoutingModule
  ],
  declarations: [InitAuthorizePage]
})
export class InitAuthorizePageModule {}
