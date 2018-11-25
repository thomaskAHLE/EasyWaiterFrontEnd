import { Component, OnInit,  Input } from '@angular/core';
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
  constructor(private _restaurantService: RestaurantService) { 
    console.log('orderedtabConstructor');
    console.log(this.tableOrders);
  }
  
  markFoodAsDelivered(order:OrderModel)
  {

    order.status= ORDER_STATUS.DELIVERED;
    this._restaurantService.updateOrderStatus(order);
  }
  
  // ngOnInit() {
  //   this._restaurantService.getOrderObservableforTable(this.table.tableNumber).subscribe((orders:OrderModel[])=>{
  //     this.tableOrders = orders.sort((a,b)=> a.status - b.status);
  //   })
  // }
  
  

}
