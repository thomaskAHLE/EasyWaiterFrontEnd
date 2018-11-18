import { Injectable } from '@angular/core';
import {TableModel} from '../models/table-model';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class TableService {

  tableCollection:AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) { 
    this.tableCollection = this.afs.collection('tables');
  }

  getTableObservable(){
    
  }

}
