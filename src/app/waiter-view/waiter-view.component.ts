import { Component, OnInit } from '@angular/core';
import {TableModel} from '../models/table-model';
import {UserService} from '../services/user.service';
import { RestaurantService } from '../services/restaurant.service';
@Component({
  selector: 'app-waiter-view',
  templateUrl: './waiter-view.component.html',
  styleUrls: ['./waiter-view.component.css']
})
export class WaiterViewComponent implements OnInit {

  allTables: TableModel[];//subscribe to tables to track updates
  activeTables: TableModel[];
  inactiveTables:TableModel[];
 
  constructor( private _userService: UserService, private _restaurantService: RestaurantService) {
   }

  ngOnInit() {
    const waiter = this._userService.getCurrentUser();
    this.allTables = this._restaurantService.getWaitersTables(waiter);
    this.activeTables = this.allTables.filter(t => t.isActive);
    this.inactiveTables = this.allTables.filter(t => !t.isActive);
    console.log(waiter);
    console.log(this.allTables);
  }

}
