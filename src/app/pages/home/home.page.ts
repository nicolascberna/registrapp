
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


import { HorarioService } from 'src/app/services/horario.service';
import { Usuario } from 'src/app/interfaces/horariointerface';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';
import { HorarioPage } from '../horario/horario.page';
import { EscaneoPage } from '../escaneo/escaneo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  /* variable de tipo any que permite cualquiero tipo de dato */
  dato: any;
  usuario: Usuario;

  constructor(private horarioService: HorarioService,
              public alertController: AlertController,
              private router: Router,
              public modalController: ModalController,
              private activeroute: ActivatedRoute,
              private barcodeScanner: BarcodeScanner,
              private dataLocal: DataLocalService) {
                this.activeroute.queryParams.subscribe(params => {
                  /* validar si la navegacion tiene parametros */
                  if (this.router.getCurrentNavigation().extras.state){
                    /* si existen parametros los rescata en una variable */
                    this.dato = this.router.getCurrentNavigation().extras.state.user;
                    console.log(this.dato);
                  }
                });
              }

  /* se dispara apenas entra */
  ionViewWillEnter() {;
    this.horarioService.getUsuario().subscribe(resp=>
      {
        console.log('usuario', resp);
        this.usuario = resp;
      });
  }

  /* metodo para escanear QR */
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      /* verificamos si el usuario no cancelo el escaneo guardamos el registro */
      if ( !barcodeData.cancelled ) {
        this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
      }

    }).catch(err => {
      console.log('Error', err);

      /* borrar despues de desplegar */
      this.dataLocal.guardarRegistro('QR', 'http://www.malcom.com');
    });
  }


  /* este metodo llamara al alert exit*/
  async salir() {
    const alert = await this.alertController.create({
      backdropDismiss: false, //obligar al usuario a usar el boton
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

  /* llama al modal que muestra los horarios */
  async presentModal() {
    const modal = await this.modalController.create({
      component: HorarioPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  /* llama al modal que muestra escaneos realizados */
  async escaneos() {
    const modal = await this.modalController.create({
      component: EscaneoPage
    });
    return await modal.present();
  }

}
