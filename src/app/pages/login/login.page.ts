
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, AnimationController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { User } from 'src/app/interfaces/horariointerface';
import { HorarioService } from 'src/app/services/horario.service';

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
  usuario: any = [];

  guardado = false;

  constructor(private horarioService: HorarioService,
              public loadingController: LoadingController,
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

  ionViewWillEnter() {
    this.horarioService.getUser().subscribe(resp=>
      {
        console.log('usuario', resp);
        this.usuario = resp;
        console.log(this.usuario);
      });
  }

  recovery(page){
    this.router.navigate(page);
  }

  /* validado en bruto usuarios 'malcom', 'nicolas', contraseña '123', donde se muestra un */
  async ingresar(page){

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();
    await loading.onDidDismiss();

    const login = this.usuario.find(u => u.username===this.user.usuario);

    if(login === undefined){
      this.router.navigate(['/login']);
      const toast = await this.toastController.create({
        message: 'Credenciales no validas',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
      this.user.usuario='';
      this.user.pass='';

    } else if (this.user.usuario === login.username && this.user.pass === login.password) {
      localStorage.setItem('usuario',login.nombre);
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot(page);
    }
  }

  guardarUsuario() {
    console.log(this.guardado);
  }
}
