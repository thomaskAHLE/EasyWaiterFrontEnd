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
  o: Observable<OrderModel[]>;
  waiters: UserModel[];
  path:string = "/orders";
  orders:OrderModel[] = [];
  ordersOb: Observable<OrderModel[]>;
  constructor( private db:AngularFirestore) {
    this.tables = tableData;
    console.log('Restaurant service constructor');
    this.orderCollection = this.db.collection('orders');
    //this.ordersOb = this.getOrderObservable();
    //this.ordersOb.subscribe((data: OrderModel[]) => {console.log(data); this.orders = data as OrderModel[];});

  }

  
  getWaitersTables(waiter): TableModel[] {
    return tableData.filter(t => t.assignedTo === waiter);
  }
  getToDoOrders():OrderModel[]{
    return this.orders.filter(o=> o.status === ORDER_STATUS.TO_DO);
  }

  addPendingToOrders(ordersToAdd: OrderModel[])
  {
    ordersToAdd.forEach( o => this.orderCollection.add(JSON.parse(JSON.stringify(o))));
    //this.orders = this.orders.concat(ordersToAdd);
  }

  getOrdersForTable(tableNumber:number):OrderModel[]{
    return this.orders.filter(o=> o.tableNumber === tableNumber);
  }


  getInProgOrders():OrderModel[]{
    return this.orders.filter(o=> o.status === ORDER_STATUS.IN_PROGRESS);
  }
  getFinishedOrders():OrderModel[]{
    return this.orders.filter(o=> o.status === ORDER_STATUS.FINISHED);
  }
  
  tableReadyForPickup(tableNum:number):boolean{
    return (this.orders.filter(o=> o.status === ORDER_STATUS.FINISHED && o.tableNumber === tableNum).length > 0);
  }
  //  constructor(db: AngularFireDatabase) {
  //       this.itemsRef = db.list('messages');
  //       // Use snapshotChanges().map() to store the key
  //       this.items = this.itemsRef.snapshotChanges().pipe(
  //         map(changes => 
  //           changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  //         )
  //       );
  getOrderObservable(): Observable<any[]>{
    return this.orderCollection.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new OrderModel(o.payload.doc.data().food,o.payload.doc.data().tableNumber, o.payload.doc.data().status);  data.$key = o.payload.doc.id; return data;}
    )));
    // return this.db.list<OrderModel>(this.path).valueChanges().pipe(map(obj => obj.map(o => new OrderModel( o.food, o.tableNumber, o.status, o.$key))));
  }

  updateOrderStatus(order:OrderModel)
  {
    this.orderCollection.doc(order.$key).update({status: order.status});
  }
  // getOrderObservableforTable(tableNum:number){
  //  let v = this.db.collection('orders', ref =>{
  //     return ref.where('tableNumber','==',tableNum) 
  //   });
  //   return v.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new OrderModel(o.payload.doc.data().food,o.payload.doc.data().tableNumber, o.payload.doc.data().status); data.$key = o.payload.doc.id; return data;}

  // }
}


const tableData: TableModel[] = [
  new TableModel(
    1,
    4,
    waiterData[0],
    true
  ),
  new TableModel(
    2,
    5,
    waiterData[0],
    true
  ),
  new TableModel(
    3,
    6,
    waiterData[0],
    true
  ),
  new TableModel(
    4,
    8,
    waiterData[0],
    true
  )

];