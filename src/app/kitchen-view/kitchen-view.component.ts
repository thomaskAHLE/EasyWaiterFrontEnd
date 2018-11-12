import { Component, OnInit, DoCheck, Input} from '@angular/core';
import {RestaurantService} from '../services/restaurant.service';
import {OrderModel,ORDER_STATUS} from '../models/order-model';

@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.css']
})
export class KitchenViewComponent implements OnInit, DoCheck {

  constructor(private _restaurantService :RestaurantService) { }
 
  toDoOrders:OrderModel[];
  inProgOrders:OrderModel[];
  finishedOrders:OrderModel[];
  ngOnInit() {
    this.toDoOrders = this._restaurantService.getToDoOrders();
    this.inProgOrders = this._restaurantService.getInProgOrders();
    this.finishedOrders = this._restaurantService.getFinishedOrders();
  }

  getToDoOrders():OrderModel[]{
    return this._restaurantService.getToDoOrders();
  }

  moveToToDo(order:OrderModel)
  {
    order.status = ORDER_STATUS.TO_DO;
    this.toDoOrders=this._restaurantService.getToDoOrders();
    this.inProgOrders = this._restaurantService.getInProgOrders();

  }
  moveToInProg(order:OrderModel){
    order.status = ORDER_STATUS.IN_PROGRESS;
    this.toDoOrders = this._restaurantService.getToDoOrders();
    this.inProgOrders = this._restaurantService.getInProgOrders();
  }

  moveToFinished(order:OrderModel){
    order.status = ORDER_STATUS.FINISHED;
    this.inProgOrders = this._restaurantService.getInProgOrders();
    this.finishedOrders = this._restaurantService.getFinishedOrders();
  }
  ngDoCheck()
  {
    this.toDoOrders = this._restaurantService.getToDoOrders();
  }
}
