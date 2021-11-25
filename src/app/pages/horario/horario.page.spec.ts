import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HorarioPage } from './horario.page';

describe('HorarioPage', () => {
  let component: HorarioPage;
  let fixture: ComponentFixture<HorarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule ] //se declara el uso de http
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
