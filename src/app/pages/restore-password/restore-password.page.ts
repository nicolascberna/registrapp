import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.page.html',
  styleUrls: ['./restore-password.page.scss'],
})
export class RestorePasswordPage implements OnInit {
pass1: any;
pass2: any;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  /* este metodo llamara al metodo mostrar por medio de una alert */
  async crearPass() {
    if(this.pass1 != null && this.pass2 != null && this.pass1 == this.pass2){
      this.router.navigate(['/login']);
      const toast = await this.toastController.create({
        message: '¡Contraseña reestablecida!',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
    } else if (this.pass1 != null && this.pass2 != null && this.pass1 != this.pass2){
      const toast = await this.toastController.create({
        message: 'Las contraseñas deben ser iguales.',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
    } else if(this.pass1 == null && this.pass2 == null){
    const toast = await this.toastController.create({
      message: 'Debe rellenar los campos.',
      position: 'bottom',
      duration: 2000
    });
    await toast.present();
  }
}
}
