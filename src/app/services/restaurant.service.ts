import { Injectable } from '@angular/core';
import { TableModel } from '../models/table-model';
import { UserModel, USER_TYPE } from '../models/user-model';
import { UserService, waiterData } from './user.service';
import { OrderModel,ORDER_STATUS } from '../models/order-model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  tables: TableModel[];
  orderCollection: AngularFirestoreCollection<OrderModel>;
  waiters: UserModel[];
  path:string = "/orders";
  constructor( private afs:AngularFirestore) {
    console.log('Restaurant service constructor');
    this.orderCollection = this.afs.collection('orders');
    //let tableCollection = this.afs.collection('tables');
    //this.tables.forEach( t => tableCollection.add(JSON.parse(t.makeJSONString())));  
  }

  
 
  getToDoOrders():Observable<OrderModel[]>{
    let v:AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref =>{
      return ref.where('status','==',ORDER_STATUS.TO_DO) 
    });
    return v.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new OrderModel(o.payload.doc.data().food,o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data;})));
  }

  addPendingToOrders(ordersToAdd: OrderModel[])
  {
    console.log('adding pending to orders');
    ordersToAdd.forEach(o => console.log(JSON.parse(JSON.stringify(o)))); 
    ordersToAdd.forEach( o => this.orderCollection.add(JSON.parse(JSON.stringify(o))));
  }

  


  getInProgOrders():Observable<OrderModel[]>{
    let v:AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref =>{
      return ref.where('status','==',ORDER_STATUS.IN_PROGRESS) 
    });
    return v.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new OrderModel(o.payload.doc.data().food,o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data;})));
  }
  
  getFinishedOrders():Observable<OrderModel[]>{
    let v:AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref =>{
      return ref.where('status','==',ORDER_STATUS.FINISHED) 
    });
    return v.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new OrderModel(o.payload.doc.data().food,o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data;})));
  }
  
  getOrderObservable(): Observable<OrderModel[]>{
    return this.orderCollection.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new OrderModel(o.payload.doc.data().food,o.payload.doc.data().tableNumber, o.payload.doc.data().status);  data.$key = o.payload.doc.id; return data;}
    )));
  }

  updateOrderStatus(order:OrderModel)
  {
    this.orderCollection.doc(order.$key).update({status: order.status});
  }
  getOrderObservableforTable(tableNum:number):Observable<OrderModel[]>{
   let v:AngularFirestoreCollection<OrderModel> = this.afs.collection('orders', ref =>{
      return ref.where('tableNumber','==',tableNum) 
    });
    return v.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new OrderModel(o.payload.doc.data().food,o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data;})));

  }
}
