import { Component, OnInit } from '@angular/core';
import {TableModel} from '../models/table-model';
import { RestaurantService } from '../services/restaurant.service';
import{TableService} from '../services/table.service';
import { OrderModel, ORDER_STATUS } from '../models/order-model';
import { AuthenticationService } from '../services/authentication.service';
import { UserModel } from '../models/user-model';
import {take} from 'rxjs/operators';
import { Router } from '@angular/router';
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
 
  /* constructor 
   * @param restaurantService: injected check if table has a finished order for pickup
   * @param tableService: gets all tables for a waiter
   * @param auth: gets current user
   * @param router: used for routing to logout
  */
  constructor( private _restaurantService: RestaurantService, private _tableService: TableService,
               public auth: AuthenticationService, private router:Router) {
  }
 /* ngOnInit
   * gets user from auth service
   * gets tables for that user
   * gets all finished orders
  */
  ngOnInit() {
    this.auth.user.pipe(take(1)).subscribe(user => {
      this.waiter = user;
      this._tableService.getTablesForWaiter(this.waiter.displayName).subscribe((tables:TableModel[])=>{this.allTables = tables;});
     });
    this._restaurantService.getFinishedOrders().subscribe((finished: OrderModel[])=>{this.finishedOrders = finished});
  }

  /* getActiveTables()
   @return TableModel[]: returns an array of active tables assigned to the user
  */
  getActiveTables():TableModel[]{
    return this.allTables.filter(t=> t.isActive);
  }

  /* getInactiveTables()
   @return TableModel[]: returns an array of inactive tables assigned to the user
  */
  getInactiveTables():TableModel[]{
    return this.allTables.filter(t => !t.isActive);
  }
  /* getInactiveTables()
   @return boolean: returns true if a table has an order marked for pickup
  */
  readyForPickup(tableNum:number):boolean{
    return this.finishedOrders.filter(fo => fo.tableNumber == tableNum).length > 0;
  }
  /* waiterLogout()
   * uses authentication service to log user out
   * navigates back to login screen
  */
  waiterLogout()
  {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
