import { Injectable } from '@angular/core';
import { TableModel } from '../models/table-model';
import { UserModel, USER_TYPE } from '../models/user-model';
import { UserService, waiterData } from './user.service';
import { OrderModel,ORDER_STATUS } from '../models/order-model';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  tables: TableModel[];
  waiters: UserModel[];
  orders:OrderModel[] = [];
  constructor(_userServers: UserService) {
    this.tables = tableData;
    console.log('Restaurant service constructor');
  }

  getWaitersTables(waiter): TableModel[] {
    return tableData.filter(t => t.assignedTo === waiter);
  }
  getToDoOrders():OrderModel[]{
    return this.orders.filter(o=> o.status === ORDER_STATUS.TO_DO);
  }

  addPendingToOrders(ordersToAdd: OrderModel[])
  {
    this.orders = this.orders.concat(ordersToAdd);
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