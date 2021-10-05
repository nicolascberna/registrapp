/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { HorarioPage } from '../horario/horario.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  /* variable de tipo any que permite cualquiero tipo de dato */
dato: any;

  constructor(public alertController: AlertController,
              private router: Router,
              public modalController: ModalController,
              private activeroute: ActivatedRoute,) {
                this.activeroute.queryParams.subscribe(params => {
                  /* validar si la navegacion tiene parametros */
                  if (this.router.getCurrentNavigation().extras.state){
                    /* si existen parametros los rescata en una variable */
                    this.dato = this.router.getCurrentNavigation().extras.state.user;
                    console.log(this.dato);
                  }
                });
              }

  /* este metodo llamara al metodo mostrar por medio de una alert */
  async salir() {
    const alert = await this.alertController.create({
      message: '¿Seguro deseas salir?',
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Aceptar',
        handler: () => {
        this.router.navigate(['/login']);}
    }]
  });
    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: HorarioPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
