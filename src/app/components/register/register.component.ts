import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(
    private authSvc:AuthService,
    private fireAuth:AngularFireAuth, 
    private userSvc:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.authSvc.onRegister(this.user).then(response => {
      this.userSvc.createElement(
        {
          email: this.user.email,
          pass: 'no hace falta',
          userType: this.user.userType,
          nombre: '',
          apellido: '',
          isActive: true
        }
      );
      if (this.user.userType == 'administrador') {
        this.router.navigate(['/administrador']);
      }else if(this.user.userType == 'alumno'){
        this.router.navigate(['/alumno']);
      } else {
        this.router.navigate(['/profesor']);
      }
    });
  }
  login(){}
}