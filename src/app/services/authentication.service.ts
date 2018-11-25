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
    this.user = afsAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<UserModel>(`users/${user.uid}`).valueChanges();
      }
      else {
        return of(null);
      }
    }));
  }

 login(email: string, password: string):void {
    this.afsAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then( () =>{
      return this.afsAuth.auth.signInWithEmailAndPassword(email, password); })
  };
  

  logout() {
    this.afsAuth.auth.signOut();
  }

}
