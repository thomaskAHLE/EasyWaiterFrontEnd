import { Component, Input } from '@angular/core';
import { TableModel } from 'src/app/models/table-model';
import {ORDER_STATUS, OrderModel} from '../../../models/order-model';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-pending-tab',
  templateUrl: './pending-tab.component.html',
  styleUrls: ['./pending-tab.component.css']
})
export class PendingTabComponent  {

  @Input()
  table: TableModel;
  orderStatus = ORDER_STATUS;
  /* constructor 
   * @param restaurantService: used to send pending orders to order collection in database
  */
  constructor(private restaurantService: RestaurantService) { }

  /* removeFoodFromPending: removes food from pending 
   * @param orderToRemove: order to remove from pending orders
  */
  removeFoodFromPending(orderToRemove:OrderModel):void
  {
    this.table.removeFromPending(orderToRemove);
  }

  /* sendToKitchen: sends tables pending items to database
   * emptys table's pendingOrders array
  */
  sendToKitchen():void
  {
    this.restaurantService.addPendingToOrders(this.table.PendingOrders);
    this.table.PendingOrders = [];
  }

}
