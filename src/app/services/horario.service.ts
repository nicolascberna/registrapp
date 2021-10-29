import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/horariointerface';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpClient) { }

  getUsuario()
  {
    return this.http.get<Usuario>('http://localhost:3000/usuario/1');
  }

  getUsuarioo(username)
  {
    return this.http.get<Usuario>(`http://localhost:3000/usuario?username=${username}`);
  }
}
