import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes,  } from '@angular/router';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { ProteccionGuard } from './guards/ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  /* {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule),
    canActivate: [NoIngresadoGuard]
  }, */
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [ProteccionGuard]
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule),
    canActivate: [ProteccionGuard]
  },
  {
    path: 'escaneo',
    loadChildren: () => import('./pages/escaneo/escaneo.module').then( m => m.EscaneoPageModule),
    canActivate: [ProteccionGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
