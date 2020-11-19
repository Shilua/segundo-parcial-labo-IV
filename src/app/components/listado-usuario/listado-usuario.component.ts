import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  usuarios: Array<User> = new Array<User>();
  constructor() { }

  ngOnInit(): void {
  }

  
  
}
