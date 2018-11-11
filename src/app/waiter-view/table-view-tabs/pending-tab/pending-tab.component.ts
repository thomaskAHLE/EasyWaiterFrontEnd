import { Component, OnInit, Input } from '@angular/core';
import { TableModel } from 'src/app/models/table-model';
import {ORDER_STATUS, OrderModel} from '../../../models/order-model';
@Component({
  selector: 'app-pending-tab',
  templateUrl: './pending-tab.component.html',
  styleUrls: ['./pending-tab.component.css']
})
export class PendingTabComponent implements OnInit {

  @Input()
  table: TableModel;
  orderStatus = ORDER_STATUS;
  
  constructor() { }

  removeFoodFromPending(order:OrderModel):void
  {
    this.table.removeFromPending(order);
  
  }

  send():void //temperary function 
  {
    this.table.Orders = this.table.Orders.concat(this.table.PendingOrders); 
    this.table.PendingOrders = [];
  }

  ngOnInit() {
  }

}
