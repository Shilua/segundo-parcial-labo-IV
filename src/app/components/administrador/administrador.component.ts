import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/classes/materia';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { MateriaService } from "../../services/materia.service";



@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  materias: Array<Materia> = new Array<Materia>();
  profesores: Array<User> = new Array<User>();
  materia: Materia = new Materia();
  constructor(
    public materiasSrv: MateriaService,
    public userSrv: UserService
  ) { }

  ngOnInit(): void {
    this.materiasSrv.getElements().get().then(Response =>{
      Response.docs.map((element: any)=>{
        this.materias.push(
          {
            id: element.id,
            nombre: element.data().nombre,
            cuatrimestre: element.data().cuatrimestre,
            cupos: element.data().cupos,
            profesor: element.data().profesor,
            isActive: element.data().isActive,
            emailProfesor: element.data().emailProfesor,
            alumnos: element.data().alumnos
          }
        )
      });
    });
    this.userSrv.getElements().where('userType','==','profesor').get().then((snapshot)=>{
      snapshot.docs.map((element : any)=>{
        this.profesores.push({
          email: element.data().email,
          pass: 'no hace falta',
          userType: element.data().userType,
          nombre: element.data().nombre,
          apellido: element.data().apellido,
          isActive: element.data().isActive
        });
      });
    });
  }

  seleccionarProfesor(profesor: User){
    this.materia.profesor = profesor.nombre+ ' '+profesor.apellido;
    this.materia.emailProfesor = profesor.email;
  }

  cargarMateria(){
    this.materiasSrv.createElement({
      nombre: this.materia.nombre,
      cuatrimestre: this.materia.cuatrimestre,
      cupos: this.materia.cupos,
      profesor: this.materia.profesor,
      emailProfesor: this.materia.emailProfesor,
      isActive: true,
      alumnos: new Array<string>()
    });
    this.materia = new Materia();
    alert('Se ha guardado su materia');
  }
  
}
