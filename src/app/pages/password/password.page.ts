import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async correoEnviado() {
    const alert = await this.alertController.create({
      message: 'Correo enviado satisfactoriamente',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
        this.router.navigate(['/restore-password']);}
    }]
  });
    await alert.present();
  }

  navigate(page) {
    this.router.navigate(page);
  }

}
