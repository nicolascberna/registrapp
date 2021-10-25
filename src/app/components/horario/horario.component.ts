import { Component, Input, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/interfaces/horariointerface';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {

  @Input() asignatura: Asignatura[]=[];

  constructor() { }

  ngOnInit() {}

}
