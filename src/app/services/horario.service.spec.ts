import { TestBed } from '@angular/core/testing';

import { HorarioService } from './horario.service'

import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HorarioService', () => {
  let service: HorarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HorarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
