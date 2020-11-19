import { Component, Input, OnInit } from '@angular/core';
import { Materia } from "../../classes/materia";

@Component({
  selector: 'app-listado-materia',
  templateUrl: './listado-materia.component.html',
  styleUrls: ['./listado-materia.component.css']
})
export class ListadoMateriaComponent implements OnInit {
  @Input() materias: Array<Materia>;
  constructor() { }

  ngOnInit(): void {
  }

}
