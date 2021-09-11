import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestorePasswordPage } from './restore-password.page';

const routes: Routes = [
  {
    path: '',
    component: RestorePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePasswordPageRoutingModule {}
