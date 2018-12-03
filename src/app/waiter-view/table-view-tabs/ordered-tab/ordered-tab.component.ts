import { Component, Input } from '@angular/core';
import {OrderModel, ORDER_STATUS} from '../../../models/order-model';
import { TableModel } from 'src/app/models/table-model';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-ordered-tab',
  templateUrl: './ordered-tab.component.html',
  styleUrls: ['./ordered-tab.component.css']
})
export class OrderedTabComponent  {
  @Input()
  table: TableModel;
  orderStatus = ORDER_STATUS;
  @Input()
  tableOrders:OrderModel[];

  /* constructor
   * @param restaurantService: injected to mark orders as delivered
  */
  constructor(private restaurantService: RestaurantService) { }
  
  /* markFoodAsDelivered : marks order as finished, updates in database
   * @param finishedOrder: order that has been marked as finished
  */
  markFoodAsDelivered(finishedOrder:OrderModel):void
  {
    finishedOrder.status= ORDER_STATUS.DELIVERED;
    this.restaurantService.updateOrderStatus(finishedOrder);
  }
}
