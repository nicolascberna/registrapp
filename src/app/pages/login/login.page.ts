import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {
  @ViewChild('logo',{read: ElementRef, static:true}) logo: ElementRef;

  /* tabla que guardara el usuario y contraseña */
  user={
    usuario:'',
    pass:''
  };

  constructor(private router: Router,
              public alertController: AlertController,
              public toastController: ToastController,
              private animationCtrl: AnimationController) { }
  ngAfterViewInit() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.logo.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0.7, transform: 'scale(1)', opacity: '1' },
        { offset: 0.8, transform: 'scale(1.1)', opacity: '0.8' },
        { offset: 0.9, transform: 'scale(1)', opacity: '1' }
      ]);
    animation.play();
  }

  recovery(page){
    this.router.navigate(page);
  }

  /* validado en bruto usuarios 'malcom', 'nicolas', contraseña '123', donde se muestra un */
  async ingresar(page){
    if(this.user.usuario == 'malcom' && this.user.pass == '123' || this.user.usuario == 'nicolas' && this.user.pass == '123')
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
