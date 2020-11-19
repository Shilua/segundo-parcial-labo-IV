import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/classes/materia';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { MateriaService } from 'src/app/services/materia.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  materias: Array<Materia> = new Array<Materia>();
  materiasAlumno: Array<Materia> = new Array<Materia>();

  materia: Materia = new Materia();
  alumno: User = new User();
  constructor(
    public materiasSrv: MateriaService,
    public userSrv: UserService,
    public authSvc: AuthService
  ) { }

  ngOnInit(): void {
    this.getAlumno();
    this.getMaterias();
  }

  getAlumno(){
    this.userSrv.getElement().then((userData: any) =>
    {
      this.alumno.email = userData.email;
      this.alumno.nombre = userData.nombre;
      this.alumno.userType = userData.userType;
      this.alumno.apellido = userData.apellido;
      this.getMateriasAlumno();
    });
    
  }
  getMaterias(){
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
  }
  getMateriasAlumno(){
    this.materiasSrv.getElements()
      .where('alumnos','array-contains',this.alumno.email)
      .get()
      .then(Response =>{
        Response.docs.map((element: any)=>{
          this.materiasAlumno.push(
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
          );
        });
      });
  }

  seleccionarMateria(materia: Materia){
    this.materia = materia;
  }

  cargarMateria(){
    this.materia.alumnos.push(this.alumno.email);
    this.materiasSrv.saveAlumno(this.materia);
    alert('Se ha guardado el alumno');
    this.materia = new Materia();
  }
  

}
