import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitAuthCodePage } from './init-auth-code.page';

const routes: Routes = [
  {
    path: '',
    component: InitAuthCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitAuthCodePageRoutingModule {}
