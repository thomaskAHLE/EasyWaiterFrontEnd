import { Component, OnInit, DoCheck, Input, OnDestroy} from '@angular/core';
import {RestaurantService} from '../services/restaurant.service';
import {OrderModel,ORDER_STATUS} from '../models/order-model';

@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.css']
})
export class KitchenViewComponent implements OnInit {

  constructor(private _restaurantService :RestaurantService) { }
 
  toDoOrders:OrderModel[] = [];
  inProgOrders:OrderModel[] = [];
  finishedOrders:OrderModel[] = [];
  ngOnInit() {
    this._restaurantService.getToDoOrders().subscribe((toDo:OrderModel[])=>{
      this.toDoOrders = toDo;
    });
    this._restaurantService.getInProgOrders().subscribe((inProg:OrderModel[])=>{
      this.inProgOrders = inProg;
    });
    this._restaurantService.getFinishedOrders().subscribe((fin:OrderModel[])=>{
      this.finishedOrders = fin;
    })
  }

  moveToToDo(order:OrderModel)
  {
    order.status = ORDER_STATUS.TO_DO;
    this._restaurantService.updateOrderStatus(order);

  }
  moveToInProg(order:OrderModel){
    order.status = ORDER_STATUS.IN_PROGRESS;
    this._restaurantService.updateOrderStatus(order);
  }

  moveToFinished(order:OrderModel){
    order.status = ORDER_STATUS.FINISHED;
    this._restaurantService.updateOrderStatus(order);
  }

}
