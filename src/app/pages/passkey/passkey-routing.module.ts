import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasskeyPage } from './passkey.page';

const routes: Routes = [
  {
    path: '',
    component: PasskeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasskeyPageRoutingModule {}
