import { Component, OnInit, Input } from '@angular/core';
import {OrderModel, ORDER_STATUS} from '../../../models/order-model';
import { TableModel } from 'src/app/models/table-model';
@Component({
  selector: 'app-ordered-tab',
  templateUrl: './ordered-tab.component.html',
  styleUrls: ['./ordered-tab.component.css']
})
export class OrderedTabComponent implements OnInit {
  @Input()
  table: TableModel;
  orderStatus = ORDER_STATUS;
  constructor() { }
  
  markFoodAsDelivered(order:OrderModel)
  {

    order.status= ORDER_STATUS.DELIVERED;
    console.log(order);
  }
  
  ngOnInit() {
  }

  
}
