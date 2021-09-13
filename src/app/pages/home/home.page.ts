import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { HorarioPage } from '../horario/horario.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public alertController: AlertController, 
              private router: Router, 
              public modalController: ModalController) {}

  ngOnInit() {
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
