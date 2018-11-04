import { Injectable } from '@angular/core';
import { TableModel } from '../models/table-model';
import { UserModel, USER_TYPE } from '../models/user-model';
import { UserService, waiterData } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  tables: TableModel[];
  waiters: UserModel[];
  constructor(_userServers: UserService) {
    this.tables = tableData;
  }

  getWaitersTables(waiter): TableModel[] {
    console.log(this.tables)
    return tableData.filter(t => t.assignedTo === waiter);
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