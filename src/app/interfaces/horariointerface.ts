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
  username: string;
  password: string;
  email: string;
  carrera: string;
  sede: string;
  horario: Horario
}
