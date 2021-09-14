import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.page.html',
  styleUrls: ['./restore-password.page.scss'],
})
export class RestorePasswordPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  /* este metodo llamara al metodo mostrar por medio de una alert */
  async crearPass() {
    const toast = await this.toastController.create({
      message: 'Contraseña reestablecida',
      position: 'bottom',
      duration: 10000,
      buttons: [{
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await toast.present();
  }

  navigate(page) {
    this.router.navigate(page);
  }

}
