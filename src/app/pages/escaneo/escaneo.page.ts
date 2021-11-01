import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit {

  constructor(  public modalController: ModalController,
                public dataLocal: DataLocalService ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  verEscaneo(escaneo) {
    console.log(escaneo);
  }

}
