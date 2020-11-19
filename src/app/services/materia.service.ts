import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Materia } from '../classes/materia';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage,
    public authService: AuthService,
    public afAuth: AngularFireAuth
  ) { }
  getElements(){
    return this.firestore.collection('subjects').ref;
  }
  createElement(subject: any){
    this.firestore.collection('subjects').add(subject);
  }

  deleteElement(subject: Materia) {
    this.firestore
      .collection('subjects')
      .doc(subject.id)
      .update({ isActive: false });
  }

  saveAlumno(subject: Materia){
    this.firestore.collection('subjects')
    .doc(subject.id)
    .update(
      {
        alumnos: subject.alumnos
      }
    )
  }

}
