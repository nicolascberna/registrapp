import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonList, ModalController, ToastController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  constructor(  public modalController: ModalController,
                public storage: Storage,
                public dataLocal: DataLocalService,
                private router: Router,
                public toastController: ToastController, ) { }

  ngOnInit() {
  }

  verEscaneo(escaneo) {
    console.log(escaneo);
    this.dataLocal.envioRegistro(escaneo);
    this.ionList.closeSlidingItems();
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

  delete(escaneo){
    console.log(escaneo);
    this.router.navigate(['/not-found']);
    this.ionList.closeSlidingItems();
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
