import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { HorarioService } from 'src/app/services/horario.service';
import { Horario } from 'src/app/interfaces/horariointerface';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  horario: Horario[] = [];
  date: Date = new Date();

  constructor(public modalController: ModalController,
              private horarioService: HorarioService
    ) { }

  ngOnInit() {
    this.horarioService.getHorario().subscribe(resp=>
      {
        console.log(resp.horario);
        this.horario.push(...resp.horario);
        //this.usuario = resp;
      });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
