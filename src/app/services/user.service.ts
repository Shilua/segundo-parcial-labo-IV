import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from '../classes/user';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public firestore: AngularFirestore,
    public fireStorage: AngularFireStorage,
    public authService: AuthService,
    public afAuth: AngularFireAuth
  ) { }

  getElements(){
    return this.firestore.collection('users').ref;
  }
  
  getElement(){
    let currUserEmail:any;
    let currUser:any;
    return new Promise((resolve, reject) => {
      this.afAuth.currentUser
        .then((response) => {
          currUserEmail = response.email;
          this.firestore
            .collection('users')
            .ref.where('email', '==', currUserEmail)
            .get()
            .then((response) => {
              currUser = response.docs[0].data();
              resolve(currUser);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  createElement(user: User){
    this.firestore.collection('users').add(user);
  }

  deleteElement(user: User) {
    this.firestore
      .collection('users')
      .doc(user.email)
      .update({ isActive: false });
  }

  modifyElement(user:User){
    this.firestore.collection('users').doc(user.email).update(user);
  }

}
