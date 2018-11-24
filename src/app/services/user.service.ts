import { Injectable } from '@angular/core';
import { UserModel, USER_TYPE } from '../models/user-model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afs:AngularFirestore) { 
  }

  getUsers():Observable<UserModel[]>
  {
    let col: AngularFirestoreCollection<UserModel> = this.afs.collection('users', ref => ref.orderBy('displayName'));
    return col.snapshotChanges().pipe(map(user=> user.map(u=>
      {const data = new UserModel(u.payload.doc.data().displayName, u.payload.doc.data().email, u.payload.doc.data().password, u.payload.doc.data().userType, u.payload.doc.id); return data})));
  }

}
