import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage; //declaracion del componente a testear
  let fixture: ComponentFixture<LoginPage>; //declaracion del componente bajo prueba
  //ComponentFixture permite acceder a todas las propiedades de la clase y su template

  //configuracion del modulo mediante configureTestingModule
  //compilando las definiciones con compileComponents
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, FormsModule]
    }).compileComponents();

    //se inyectan componentes mediante createComponent,
    //se obtiene su instancia mediante la propiedad componentInstance,
    //se detectan cambios mediante detectChanges
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  //prueba individual
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify navigation controller', () => {
    expect(component.ingresar).toBeTruthy()
  });
});
