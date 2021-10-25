import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { HorarioComponent } from './horario/horario.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HorarioComponent,
    AsignaturaComponent
  ],
  exports:[
    HeaderComponent,
    HorarioComponent,
    AsignaturaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
