import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario, User } from '../interfaces/horariointerface';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {



  constructor(private http: HttpClient) { }

  getHorario()
  {
    return this.http.get<Horario>('https://malcompozo.github.io/Data/db.json');
  }

  getUser()
  {
    return this.http.get<User>(`https://nicolascberna.github.io/data/db.json`);
  }

}
