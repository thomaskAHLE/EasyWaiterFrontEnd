import { Component, OnInit, Input } from '@angular/core';
import {OrderModel, ORDER_STATUS} from '../../../models/order-model';
import { TableModel } from 'src/app/models/table-model';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-ordered-tab',
  templateUrl: './ordered-tab.component.html',
  styleUrls: ['./ordered-tab.component.css']
})
export class OrderedTabComponent implements OnInit {
  @Input()
  table: TableModel;
  orderStatus = ORDER_STATUS;
  constructor(private _restaurantService: RestaurantService) { }
  
  markFoodAsDelivered(order:OrderModel)
  {

    order.status= ORDER_STATUS.DELIVERED;
    console.log(order);
  }
  
  ngOnInit() {
  }
  
  getOrders():OrderModel[]{
    return this._restaurantService.getOrdersForTable(this.table.tableNumber);
  }
  
}
