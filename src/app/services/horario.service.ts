import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../interfaces/horariointerface';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpClient) { }

  getHorario()
  {
    return this.http.get<Horario>('http://localhost:3000/horario');
  }
}
