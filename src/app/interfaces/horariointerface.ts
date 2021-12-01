export interface Asignatura {
  horario: Horario[];
}

export interface Horario {
  idAsignatura: string;
  nombre:       string;
  horaInicio:   string;
  horaTermino:  string;
  profesor:     string;
  sede:         string;
  horario: Horario[];
}

export interface User {
  id: number;
  username: string;
  password: string;
  nombre: string;
  email: string;
}
