import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitLandingAuthPage } from './init-landing-auth.page';

const routes: Routes = [
  {
    path: '',
    component: InitLandingAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitLandingAuthPageRoutingModule {}
