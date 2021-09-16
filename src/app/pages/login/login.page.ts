import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

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

  constructor(private router: Router, public alertController: AlertController, public toastController: ToastController) { }

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
    if(this.user.usuario == 'malcom' || this.user.usuario == 'nicolas' && this.user.pass == '123')
    {  const navigationExtras: NavigationExtras={
        state:{
          user: this.user.usuario
        }
      };
      this.router.navigate(page, navigationExtras);
    } else if (this.user.usuario != 'malcom' && this.user.usuario != 'nicolas' || this.user.pass != '123'){
      this.router.navigate(['/login']);
      const toast = await this.toastController.create({
        message: 'Credenciales no validas',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
    }
  }
}
