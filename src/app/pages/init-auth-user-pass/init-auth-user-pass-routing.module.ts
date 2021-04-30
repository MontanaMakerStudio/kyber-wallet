import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitAuthUserPassPage } from './init-auth-user-pass.page';

const routes: Routes = [
  {
    path: '',
    component: InitAuthUserPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitAuthUserPassPageRoutingModule {}
