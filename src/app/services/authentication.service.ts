import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';
import { UserModel, USER_TYPE } from '../models/user-model';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<UserModel | null>;
  userRef: AngularFirestoreDocument<UserModel>;
  constructor(private afs: AngularFirestore, private afsAuth: AngularFireAuth, private router: Router) {
    console.log('authentication service constructor');
    this.user = afsAuth.authState.pipe(switchMap(user => {
      console.log('IN SWITCH MAP');
      if (user) {
        console.log('user found');
        console.log(user);
        return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
      }
      else {
        console.log('user not found');
        return of(null);
      }
    }));
  }

  private updateUserData(user: User) {
    // this.userRef = this.afs.doc(`users/${user.uid}`);
  }

 login(email: string, password: string) {
    this.afsAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then( () =>{
      return this.afsAuth.auth.signInWithEmailAndPassword(email, password).then(credential => { return this.updateUserData(credential.user); })
    });
  }

  logout() {
    console.log('logout')
    this.afsAuth.auth.signOut();
  }

}
