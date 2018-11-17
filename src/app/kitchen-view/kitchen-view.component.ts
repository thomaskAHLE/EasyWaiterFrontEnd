import { Component, OnInit, DoCheck, Input} from '@angular/core';
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
    this._restaurantService.getOrderObservable().subscribe((orders:OrderModel[])=>{
      this.toDoOrders = orders.filter(o => o.status == ORDER_STATUS.TO_DO);
      this.inProgOrders = orders.filter(o => o.status == ORDER_STATUS.IN_PROGRESS);
      this.finishedOrders = orders.filter(o => o.status == ORDER_STATUS.FINISHED);
      console.log("kitchen get orders ");
      console.log(orders);
      console.log(this.toDoOrders);
      console.log(this.inProgOrders);
  });
  }
  getToDoOrders():OrderModel[]{
    return this._restaurantService.getToDoOrders();
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
