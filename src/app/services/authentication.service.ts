import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';
import { UserModel } from '../models/user-model';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable< UserModel| null>;
  constructor(private afs: AngularFirestore, private afsAuth: AngularFireAuth, private router: Router) {
    console.log('authentication service constructor');
    this.user = afsAuth.authState.pipe(switchMap(user => {
      console.log('IN SWITCH MAP');
      if (user)
      {
        console.log('user found');
        console.log(user);
        return this.afs.doc<UserModel>(`user/${user.uid}`).valueChanges();
        
      }
      else{
        console.log('user not found');
        return of(null);
      }
    }));
  }

  private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<UserModel>= this.afs.doc(`users/${user.uid}`);

    const data: UserModel= {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      userType: 3,
      password: null
    }
    return userRef.set(data);
  }

  login(email:string, password:string) {
    console.log('email'+ email);
    console.log('password'+ password);
    this.user.pipe(
      take(1),
      map(user => console.log(user))
    )
    // const provider = new auth.EmailAuthProvider()
    // this.oAuthLogin(provider);
    // console.log('USER: ')
    return this.afsAuth.auth.signInWithEmailAndPassword(email, password).then(credential =>{return this.updateUserData(credential.user);})
  }

  logout() {
    this.afsAuth.auth.signOut();
  }
  private oAuthLogin(provider) {
    return this.afsAuth.auth.signInWithPopup(provider).then((crentential) => this.updateUserData(crentential.user));

  }
  
}
