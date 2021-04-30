import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitLandingPhonePage } from './init-landing-phone.page';

const routes: Routes = [
  {
    path: '',
    component: InitLandingPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitLandingPhonePageRoutingModule {}
