import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
correo: any;

  constructor(private router: Router, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  async correoEnviado() {
    if(this.correo == null)
    {
      const toast = await this.toastController.create({
        message: 'Debe ingresar un correo valido.',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
    } else {
      const alert = await this.alertController.create({
        message: 'Correo enviado satisfactoriamente',
        buttons: [{
          text: 'Aceptar',
          handler: () => {
          this.router.navigate(['/login']);}
      }]
    });
      await alert.present();
    }
  }
}
