import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {OrderModel, ORDER_STATUS} from '../../../models/order-model';
import { TableModel } from 'src/app/models/table-model';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-ordered-tab',
  templateUrl: './ordered-tab.component.html',
  styleUrls: ['./ordered-tab.component.css']
})
export class OrderedTabComponent implements OnInit, OnDestroy {
  @Input()
  table: TableModel;
  orderStatus = ORDER_STATUS;
  orders:OrderModel[] = [];
  constructor(private _restaurantService: RestaurantService) { }
  
  markFoodAsDelivered(order:OrderModel)
  {

    order.status= ORDER_STATUS.DELIVERED;
    console.log(order);
  }
  
  ngOnInit() {
    this._restaurantService.getOrderObservable().subscribe((orders:OrderModel[])=>{
      this.orders = orders.filter(o => o.tableNumber == this.table.tableNumber);
      console.log(orders);

    })
  }
  
  getOrders():OrderModel[]{
    return this._restaurantService.getOrdersForTable(this.table.tableNumber);
  }
  ngOnDestroy()
  {

  }
}
