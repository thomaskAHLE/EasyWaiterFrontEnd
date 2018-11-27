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

  /*constuctor:
  * @param afs: Angular firestore injected to interactive with database
  */
  constructor(private afs: AngularFirestore) {
    this.tableCollection = this.afs.collection('tables');
    this.tableObservables = this.tableCollection.snapshotChanges().pipe(map(obj => obj.map(o => { const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); data.$key = o.payload.doc.id; return data; })));
  }

  /* getTablesForWaiter: gets all tables assigned to a waiter   
  *  @param waiter: waiter name
  *  @return Observable<TableModel[]>: used for subscribing to changes to a waiters tables
  */
  getTablesForWaiter(waiter: string): Observable<TableModel[]> {
    let waiterTableCollection: AngularFirestoreCollection<TableModel> = this.afs.collection('tables', ref => {
      return ref.where('assignedTo', '==', waiter)
    });
    return waiterTableCollection.snapshotChanges()
        .pipe(map(obj => obj.map(
          o => { 
            const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); 
            console.log(data)
            data.$key = o.payload.doc.id; 
            return data; 
          }
          )));
  }
  /* getTablesFromTableNum: gets table from database using table number
  *  @param tableNum: table number for table searching for
  *  @return Observable<TableModel[]>: used for subscribing to the table 
  */
  getTableFromTableNum(tableNum: number): Observable<TableModel[]> {
    const tableForNumber: AngularFirestoreCollection<TableModel> = this.afs.collection('tables', ref => {
      return ref.where('tableNumber', '==', tableNum.toString())
    });
    return tableForNumber.snapshotChanges().pipe(map(obj => 
       obj.map(o => {
        const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); data.$key = o.payload.doc.id;
        return data;
      })
    ));
  }
  /* getAllTables: gets all tables from database
  *  @return Observable<TableModel[]>: used for subscribing to all tables
  */
  getAllTables(): Observable<TableModel[]> {
    let allTableCollection: AngularFirestoreCollection<TableModel> = this.afs.collection('tables', ref => ref.orderBy('tableNumber'));
    return allTableCollection.snapshotChanges().pipe(map(obj =>
      obj.map(o => {
        const data = new TableModel(o.payload.doc.data().tableNumber, o.payload.doc.data().numSeats, o.payload.doc.data().assignedTo, o.payload.doc.data().isActive); data.$key = o.payload.doc.id;
        return data;
      }
      )));
  }

  /* updateTableisActive: updatesActive status of table either from inactive to active or active to inactive
  *  @param tableToUpdate: table that is being updated
  */
  updateTableisActive(tableToUpdate:TableModel)
  {
    this.tableCollection.doc(tableToUpdate.$key).update({isActive: tableToUpdate.isActive});
  }

  /* updateTableisAssignment: updates the employee the table is assigned to
  *  @param tableToUpdate: table that is being updated
  */
  updateTableAssignment(tableToUpdate: TableModel) {
    this.tableCollection.doc(tableToUpdate.$key).update({ assignedTo: tableToUpdate.assignedTo });
  }
}
