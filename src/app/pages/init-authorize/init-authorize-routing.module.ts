import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitAuthorizePage } from './init-authorize.page';

const routes: Routes = [
  {
    path: '',
    component: InitAuthorizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitAuthorizePageRoutingModule {}
