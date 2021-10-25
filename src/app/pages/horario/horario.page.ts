import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { HorarioService } from 'src/app/services/horario.service';
import { Asignatura } from 'src/app/interfaces/horariointerface';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  horario: Asignatura[] = [];

  constructor(public modalController: ModalController,
              private horarioService: HorarioService
    ) { }

  ngOnInit() {
    this.horarioService.getHorario().subscribe(resp=>
      {
        console.log('horario lunes', resp.lunes);
        this.horario.push(...resp.lunes);
      });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
