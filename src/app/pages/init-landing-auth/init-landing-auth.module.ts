import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitLandingAuthPageRoutingModule } from './init-landing-auth-routing.module';

import { InitLandingAuthPage } from './init-landing-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitLandingAuthPageRoutingModule
  ],
  declarations: [InitLandingAuthPage]
})
export class InitLandingAuthPageModule {}
