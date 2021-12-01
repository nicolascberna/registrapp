import { TestBed } from '@angular/core/testing';

import { DataLocalService } from './data-local.service';

import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


describe('DataLocalService', () => {
  let service: DataLocalService;

  const storageIonicMock: any = {
    get: () => new Promise<any>((resolve, reject) => resolve('As2342fAfgsdr')),
   };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [{
            provide: Storage,
            useValue: storageIonicMock
          }, File, EmailComposer]
    });
    service = TestBed.inject(DataLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
