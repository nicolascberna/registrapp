import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController, AnimationController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {
  @ViewChild('logo',{read: ElementRef, static:true}) logo: ElementRef;

  /* objeto que guardara el usuario y contraseña */
  user: any ={
    usuario:'',
    pass:''
  };

  guardado = false;

  constructor(public loadingController: LoadingController,
              private router: Router,
              public alertController: AlertController,
              public toastController: ToastController,
              private animationCtrl: AnimationController,
              public navCtrl: NavController) { }

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

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    const closed = await loading.onDidDismiss();

    if(this.user.usuario == 'malcom' && this.user.pass == '123' || this.user.usuario == 'nicolas' && this.user.pass == '123' &&closed){

      localStorage.setItem('usuario',this.user.usuario);
      localStorage.setItem('ingresado','true');
      const navigationExtras: NavigationExtras={
        state:{
          user: this.user.usuario
        }
      };
      this.navCtrl.navigateRoot(page,navigationExtras);

    } else if (this.user.usuario != 'malcom' && this.user.usuario != 'nicolas' || this.user.pass != '123'){
      this.router.navigate(['/login']);
      const toast = await this.toastController.create({
        message: 'Credenciales no validas',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
      this.user.usuario='';
      this.user.pass='';
    }
  }

  guardarUsuario() {
    console.log(this.guardado);
  }
}
