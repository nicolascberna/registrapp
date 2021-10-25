import { Component, Input, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/interfaces/horariointerface';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.scss'],
})
export class AsignaturaComponent implements OnInit {

  @Input() asignatura: Asignatura;

  constructor() { }

  ngOnInit() {}

}
