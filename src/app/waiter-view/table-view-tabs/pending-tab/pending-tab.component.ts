import { Component, OnInit, Input } from '@angular/core';
import { TableModel } from 'src/app/models/table-model';
import {ORDER_STATUS, OrderModel} from '../../../models/order-model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pending-tab',
  templateUrl: './pending-tab.component.html',
  styleUrls: ['./pending-tab.component.css']
})
export class PendingTabComponent implements OnInit  {

  @Input()
  table: TableModel;
  orderStatus = ORDER_STATUS;
  orderUpdate: Observable<any[]>;
  
  constructor(private _restaurantService: RestaurantService) { }

  removeFoodFromPending(order:OrderModel):void
  {
    this.table.removeFromPending(order);
  
  }

  send():void //temperary function 
  {
    this._restaurantService.addPendingToOrders(this.table.PendingOrders);
    this.table.PendingOrders = [];
  }

  ngOnInit() {
   // this.orderUpdate = this._restaurantService.getOrderObservable();
  }

}
