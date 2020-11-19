import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  constructor(
    public afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
   }

   async onLogin(user:User){
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email,user.pass);
    } catch (error) {
      console.log("error", error);
    }
  }

   async onRegister(user:User){
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.pass);
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser() {
   return this.afAuth.currentUser;
 }

 logout() {
   this.afAuth.signOut();
 }
}
