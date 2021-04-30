import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitLandingPage } from './init-landing.page';

const routes: Routes = [
  {
    path: '',
    component: InitLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitLandingPageRoutingModule {}
