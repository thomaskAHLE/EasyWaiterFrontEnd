import { Component, OnInit } from '@angular/core';
import {TableModel} from '../models/table-model';
import {UserService} from '../services/user.service';
import { RestaurantService } from '../services/restaurant.service';
import{TableService} from '../services/table.service';
import { OrderModel, ORDER_STATUS } from '../models/order-model';
import { AuthenticationService } from '../services/authentication.service';
import { UserModel } from '../models/user-model';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-waiter-view',
  templateUrl: './waiter-view.component.html',
  styleUrls: ['./waiter-view.component.css']
})
export class WaiterViewComponent implements OnInit {

  allTables: TableModel[] =[];//subscribe to tables to track updates
  activeTables: TableModel[] = [];
  inactiveTables:TableModel[] =[];
  finishedOrders:OrderModel[] =[];
  waiter:UserModel;
 
  constructor( private _userService: UserService, private _restaurantService: RestaurantService, private _tableService: TableService, public auth: AuthenticationService) {
    
  }

  ngOnInit() {
    this.auth.user.pipe(take(1)).subscribe(user => {
      this.waiter = user;
      this._tableService.getTablesForWaiter(this.waiter.displayName).subscribe((tables:TableModel[])=>{this.allTables = tables; this.allTables.sort((a,b)=> a.tableNumber - b.tableNumber); tables.forEach(t=>console.log(t))});
      this.activeTables = this.allTables.filter(t => t.isActive);
      this.inactiveTables = this.allTables.filter(t => !t.isActive);
     });
    this._restaurantService.getFinishedOrders().subscribe((finished: OrderModel[])=>{this.finishedOrders = finished});
  }

  getActiveTables():TableModel[]{
    return this.allTables.filter(t=> t.isActive);
  }

  getInactiveTables():TableModel[]{
    return this.allTables.filter(t => !t.isActive);
  }
  readyForPickup(tableNum:number):boolean{
    return this.finishedOrders.filter(fo => fo.tableNumber == tableNum).length > 0;
  }
}
