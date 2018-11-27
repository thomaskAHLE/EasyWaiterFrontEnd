import { Injectable } from '@angular/core';
import { UserModel, USER_TYPE } from '../models/user-model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*constuctor:
  * @param afs: Angular firestore injected to interactive with database
  */
  constructor(private afs:AngularFirestore) { 
  }


  /*getUsers:get all users in database
  * @return Observable<UserModel[]>: used to subscribe to all users
  */
  getUsers():Observable<UserModel[]>
  {
    let allUsersCollection: AngularFirestoreCollection<UserModel> = this.afs.collection('users', ref => ref.orderBy('displayName'));
    return allUsersCollection.snapshotChanges().pipe(map(user=> user.map(u=>
      {const data = new UserModel(u.payload.doc.data().displayName, u.payload.doc.data().email, u.payload.doc.data().password, u.payload.doc.data().userType, u.payload.doc.id); return data})));
  }

}
