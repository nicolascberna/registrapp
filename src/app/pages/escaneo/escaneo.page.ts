import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit {

  constructor(  public modalController: ModalController,
                public dataLocal: DataLocalService,
                private router: Router,
                public toastController: ToastController, ) { }

  ngOnInit() {
  }

  verEscaneo(escaneo) {
    console.log(escaneo);
  }

  async enviarCorreo() {
    this.dataLocal.enviarCorreo();
  }

  volver() {
    this.router.navigate(['/home']);
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
