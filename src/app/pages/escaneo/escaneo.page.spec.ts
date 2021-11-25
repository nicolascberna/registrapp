import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscaneoPage } from './escaneo.page';
import { RouterTestingModule } from '@angular/router/testing';

import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

describe('EscaneoPage', () => {
  let component: EscaneoPage;
  let fixture: ComponentFixture<EscaneoPage>;

  const storageIonicMock: any = {
    get: () => new Promise<any>((resolve, reject) => resolve('As2342fAfgsdr')),
   };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EscaneoPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [{
        provide: Storage,
        useValue: storageIonicMock
      }, File, EmailComposer]
    }).compileComponents();

    fixture = TestBed.createComponent(EscaneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
