import { Component, OnInit} from '@angular/core';
import {RestaurantService} from '../services/restaurant.service';
import {OrderModel,ORDER_STATUS} from '../models/order-model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user-model';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-kitchen-view',
  templateUrl: './kitchen-view.component.html',
  styleUrls: ['./kitchen-view.component.css']
})
export class KitchenViewComponent implements OnInit {

  kitchen:UserModel;
  toDoOrders:OrderModel[] = [];
  inProgOrders:OrderModel[] = [];
  finishedOrders:OrderModel[] = [];

  /* constructor 
   * @param restaurantService: injected to get order
   * @param auth: gets current user
   * @param router: used for routing to route to login screen on logoff
  */
  constructor(private restaurantService :RestaurantService, private authService: AuthenticationService, private router: Router) { }
 
  
  /* ngOnInit
   * gets user from auth service
   * gets TODO, IN_PROGRESS, and FINISHED_ORDERS from restaurantService
  */
  ngOnInit() { 
    this.authService.user.pipe(take(1)).subscribe(user => {
    this.kitchen = user;
   });
    this.restaurantService.getToDoOrders().subscribe((toDo:OrderModel[])=>{
      this.toDoOrders = toDo;
    });
    this.restaurantService.getInProgOrders().subscribe((inProg:OrderModel[])=>{
      this.inProgOrders = inProg;
    });
    this.restaurantService.getFinishedOrders().subscribe((fin:OrderModel[])=>{
      this.finishedOrders = fin;
    })
  }

  /* moveToToDo : moves order to TODO Column
   * @param order: order to move to TODO column
   * changes order status to TODO
   * updates order in database
  */
  moveToToDo(order:OrderModel)
  {
    order.status = ORDER_STATUS.TO_DO;
    this.restaurantService.updateOrderStatus(order);
  }
  /* moveToInProg: moves order to in Progress Column
   * @param order: order to move to In Progress column
   * changes order status to IN_PROGRESS
   * updates order in database
  */
  moveToInProg(order:OrderModel){
    order.status = ORDER_STATUS.IN_PROGRESS;
    this.restaurantService.updateOrderStatus(order);
  }
/* moveToToDo : moves order to Finished Column
   * @param order: order to move to Finished column
   * changes order status to FINISHED
   * updates order in database
  */
  moveToFinished(order:OrderModel){
    order.status = ORDER_STATUS.FINISHED;
    this.restaurantService.updateOrderStatus(order);
  }

  /* logoutKitchen()
  *  uses auth to logout
  *  routes to login screen
  */
  logoutKitchen()
  {
    this.authService.logout();
    this.router.navigate(['login']);

  }

}
