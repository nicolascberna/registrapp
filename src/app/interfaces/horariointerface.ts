export interface Horario {
  lunes: Asignatura[];
  martes: Asignatura[];
  miercoles: Asignatura[];
  jueves: Asignatura[];
  viernes: Asignatura[];
}

export interface Asignatura {
  idAsignatura: string;
  nombre: string;
  horaInicio: string;
  horaTermino: string;
}

export interface Usuario {
  id: number;
  username: string;
  password: string;
  email: string;
  carrera: string;
  sede: string;
  horario: Horario[];
}
