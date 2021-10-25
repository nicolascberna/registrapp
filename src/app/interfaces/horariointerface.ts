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
