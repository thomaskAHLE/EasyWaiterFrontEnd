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
  constructor(_userServers: UserService) {
    this.tables = tableData;
    console.log('Restaurant service constructor');
  }

  getWaitersTables(waiter): TableModel[] {
    return tableData.filter(t => t.assignedTo === waiter);
  }
  getToDoOrders():OrderModel[]{
    let todoOrders: OrderModel[]=[];
    for(let table of this.tables)
    {
      if(table.isActive)
      {
       todoOrders = todoOrders.concat(table.Orders.filter(t=> t.status === ORDER_STATUS.TO_DO));
      }
    }
    return todoOrders;
  }

  getInProgOrders():OrderModel[]{
    let inProgOrders: OrderModel[]=[];
    for(let table of this.tables)
    {
      if(table.isActive)
      {
       inProgOrders = inProgOrders.concat(table.Orders.filter(t=> t.status === ORDER_STATUS.IN_PROGRESS));
      }
    }
    return inProgOrders;
  }
  getFinishedOrders():OrderModel[]{
    let finishedOrders: OrderModel[]=[];
    for(let table of this.tables)
    {
      if(table.isActive)
      {
       finishedOrders = finishedOrders.concat(table.Orders.filter(t=> t.status === ORDER_STATUS.FINISHED));
      }
    }
    return finishedOrders;
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