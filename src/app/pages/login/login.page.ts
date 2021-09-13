import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar(page) {
    const navigationExtras: NavigationExtras={
      state:{
        user: this.user.usuario
      }
    };
    this.router.navigate(page, navigationExtras);
  }

}
