import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitLandingPageRoutingModule } from './init-landing-routing.module';

import { InitLandingPage } from './init-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitLandingPageRoutingModule
  ],
  declarations: [InitLandingPage]
})
export class InitLandingPageModule {}
