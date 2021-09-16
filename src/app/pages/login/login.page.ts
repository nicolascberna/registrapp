import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /* tabla que guardara el usuario y contraseña */

  user={
    usuario:'',
    pass:''
  };

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

/*   ingresar(page) {
    const navigationExtras: NavigationExtras={
      state:{
        user: this.user.usuario
      }
    };
    this.router.navigate(page, navigationExtras);
  } */

  /* validado en bruto usuarios 'malcom', 'nicolas', contraseña '123', donde se muestra un */
  async ingresar(page){
    if(this.user.usuario == 'malcom' && this.user.pass == '123' || this.user.usuario == 'nicolas' && this.user.pass == '123')
    {  const navigationExtras: NavigationExtras={
        state:{
          user: this.user.usuario
        }
      };
      this.router.navigate(page, navigationExtras);
    } else {
      this.router.navigate(['/login']);
      const alert = await this.alertController.create({
        message: 'Usuario no registrado',
        buttons: [{
          text: 'Aceptar'
      }]
    });
      await alert.present();
    };
  }
}
