import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorePasswordPageRoutingModule } from './restore-password-routing.module';

import { RestorePasswordPage } from './restore-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePasswordPageRoutingModule
  ],
  declarations: [RestorePasswordPage]
})
export class RestorePasswordPageModule {}
