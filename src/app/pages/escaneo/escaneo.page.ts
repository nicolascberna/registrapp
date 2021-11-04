import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnInit {

  constructor(  public modalController: ModalController,
                public dataLocal: DataLocalService,
                private router: Router ) { }

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

  error404() {
    this.router.navigate(['/404']);
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
