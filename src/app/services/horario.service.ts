import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, User } from '../interfaces/horariointerface';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpClient) { }

  getHorario()
  {
    return this.http.get<Usuario>('https://malcompozo.github.io/Data/db.json');
  }

  getUser()
  {
    return this.http.get<User>(`http://localhost:3000/usuarios`);
  }

  // getUsuarioo(username: any)
  // {
  //   return this.http.get<Usuario>(`https://malcompozo.github.io/Data/db.json=${username}`);
  // }
}
