import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(
    private authSvc :AuthService,
    private router: Router,
    private userSvc: UserService
  ) { }

  ngOnInit(): void {
  }
  async onLogin(){
    this.authSvc.onLogin(this.user).then(res =>
      {
        this.userSvc.getElements().where('email','==',res.user.email).get().then((res)=>{
          res.docs.map((element:any)=>{
            this.user.userType = element.data().userType;
          if (this.user.userType == 'administrador') {
            this.router.navigate(['/administrador']);
          }else if(this.user.userType == 'alumno'){
            this.router.navigate(['/alumno']);}
          });
        });     
        });
      }

      cargarAlumno(){
        this.user.email = 'alumno@alumno.com';
        this.user.pass = 'alumno'
      }
      cargarAdministrador(){
        this.user.email = 'admin@admin.com';
        this.user.pass = 'administrador'
      }
      cargarProfesor(){
        this.user.email = 'profesor@profesor.com';
        this.user.pass = 'profesor'
      }
}
