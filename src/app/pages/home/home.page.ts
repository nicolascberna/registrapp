import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  /* este metodo llamara al metodo mostrar por medio de una alert */
  async salir() {
    const alert = await this.alertController.create({
      message: '¿Seguro deseas salir?',
      buttons: ['Cancelar','Aceptar']
    });

    await alert.present();
  }
}
