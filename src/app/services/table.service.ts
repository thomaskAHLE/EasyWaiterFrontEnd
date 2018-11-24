import { Injectable } from '@angular/core';
import { TableModel } from '../models/table-model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  tableCollection: AngularFirestoreCollection;
  tableObservables: Observable<TableModel[]>;
  constructor(private afs: AngularFirestore) {
    this.tableCollection = this.afs.collection('tables');
    this.tableObservables = this.tableCollection.snapshotChanges().pipe(map(obj => obj.map(o => { const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); data.$key = o.payload.doc.id; return data; })));
  }

  getTablesForWaiter(waiter: string): Observable<TableModel[]> {
    let v: AngularFirestoreCollection<TableModel> = this.afs.collection('tables', ref => {
      return ref.where('assignedTo', '==', waiter)
    });
    console.log('getting tables for user: ' + waiter);
    return v.snapshotChanges()
        .pipe(map(obj => obj.map(
          o => { 
            const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); 
            console.log(data)
            data.$key = o.payload.doc.id; 
            return data; 
          }
          )));
  }

  getTableFromTableNum(tableNum: number): Observable<TableModel[]> {
    console.log('get table num: '+tableNum)
    const v: AngularFirestoreCollection<TableModel> = this.afs.collection('tables', ref => {
      return ref.where('tableNumber', '==', tableNum.toString())
    });

    return v.snapshotChanges().pipe(map(obj => 
       obj.map(o => {
        const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); data.$key = o.payload.doc.id;
        console.log('table snapshot ' + tableNum)
        console.log(data);
        return data;
      })
    ));
  }

  getAllTables(): Observable<TableModel[]> {
    console.log('getAllTables')
    let a: AngularFirestoreCollection<TableModel> = this.afs.collection('tables', ref => ref.orderBy('tableNumber'));
    return a.snapshotChanges().pipe(map(obj =>
      obj.map(o => {
        const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); data.$key = o.payload.doc.id;
        console.log('table snapshot ')
        console.log(data);
        return data;
      }
      )));
  }
  updateTableisActive(table:TableModel)
  {
    this.tableCollection.doc(table.$key).update({isActive: table.isActive});

  }

  updateTableAssignment(table: TableModel) {
    this.tableCollection.doc(table.$key).update({ assignedTo: table.assignedTo });
  }
}
