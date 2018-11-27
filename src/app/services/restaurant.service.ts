import { Injectable } from '@angular/core';
import { TableModel } from '../models/table-model';
import { UserModel, USER_TYPE } from '../models/user-model';
import { UserService } from './user.service';
import { OrderModel, ORDER_STATUS } from '../models/order-model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReportModel } from '../models/report-model';
@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  tables: TableModel[];
  orderCollection: AngularFirestoreCollection<OrderModel>;
  waiters: UserModel[];
  path: string = "/orders";

  /* constructor
   * @params afs: Injected afs into service to get orders from database
  */
  constructor(private afs: AngularFirestore) {
    this.orderCollection = this.afs.collection('orders');
  }



  /* getToDoOrders: gets all orders that have status = TO_DO
   * @return Observable<OrderModel[]>: used for subscribing to changes in orders
  */
  getToDoOrders(): Observable<OrderModel[]> {
    let v: AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref => {
      return ref.where('status', '==', ORDER_STATUS.TO_DO)
    });
    return v.snapshotChanges().pipe(map(obj => obj.map(o => { const data = new OrderModel(o.payload.doc.data().food, o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data; })));
  }

  /* getPendingToOrders recieves pending orders from a table and sends them to the database
  * @param ordersToAdd: pending orders for a table
  */
  addPendingToOrders(ordersToAdd: OrderModel[]): void {
    ordersToAdd.forEach(o => console.log(JSON.parse(JSON.stringify(o))));
    ordersToAdd.forEach(o => this.orderCollection.add(JSON.parse(JSON.stringify(o))));
  }

  /* getInProgOrders: gets all orders that have status = IN_PROGRESS
   * @return Observable<OrderModel[]>: used for subscribing to changes in orders
  */
  getInProgOrders(): Observable<OrderModel[]> {
    let v: AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref => {
      return ref.where('status', '==', ORDER_STATUS.IN_PROGRESS)
    });
    return v.snapshotChanges().pipe(map(obj => obj.map(o => { const data = new OrderModel(o.payload.doc.data().food, o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data; })));
  }

  /* getFinishedOrders: gets all orders that have status = Finished
   * @return Observable<OrderModel[]>: used for subscribing to changes in orders
  */
  getFinishedOrders(): Observable<OrderModel[]> {
    let finishedCollection: AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref => {
      return ref.where('status', '==', ORDER_STATUS.FINISHED)
    });
    return finishedCollection.snapshotChanges().pipe(map(obj => obj.map(o => { const data = new OrderModel(o.payload.doc.data().food, o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data; })));
  }

  /* getInProgOrders: gets all orders 
   * @return Observable<OrderModel[]>: used for subscribing to changes in orders
  */
  getOrderObservable(): Observable<OrderModel[]> {
    return this.orderCollection.snapshotChanges().pipe(map(obj => obj.map(o => { const data = new OrderModel(o.payload.doc.data().food, o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data; }
    )));
  }

  /* updateOrderStatus: updates the status of an order in the database
   * @param order: Order to update
  */
  updateOrderStatus(order: OrderModel): void {
    this.orderCollection.doc(order.$key).update({ status: order.status });
  }

  /* getOrderObservableforTable: gets all orders for a table
   * @return Observable<OrderModel[]>: used for subscribing to changes in orders
  */
  getOrderObservableforTable(tableNum: number): Observable<OrderModel[]> {
    let orderForTableCollection: AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref => {
      return ref.where('tableNumber', '==', tableNum.toString())
    });
    return orderForTableCollection.snapshotChanges().pipe(map(obj => obj.map(o => {
      const data = new OrderModel(o.payload.doc.data().food, o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id;
      return data;
    })));
  }
  /* clearTablesOrders: clear a table by moving its orders from orders collection to finished orders collection
  * orders are transformed to report items before being put in finished orders
  * @param table: table to clear used to for getting orders for table 
  */
  clearTablesOrders(table: TableModel): void {
    let deliveredOrdersCollection: AngularFirestoreCollection<ReportModel> = this.afs.collection('deliveredOrders');
    this.getOrderObservableforTable(table.tableNumber).subscribe((orders: OrderModel[]) => {
      orders.forEach(o => {
        const order = {employee: table.assignedTo, name:o.food.name, price: o.food.price.toString(), key:null}
        deliveredOrdersCollection.add(order);
      })
      orders.forEach(o => {
        let orderDocument: AngularFirestoreDocument<OrderModel> = this.afs.doc<OrderModel>(`orders/${o.$key}`);
          orderDocument.delete();
      })
    })
  }
}
