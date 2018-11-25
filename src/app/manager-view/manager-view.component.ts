import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserModel, USER_TYPE } from '../models/user-model';
import {take} from 'rxjs/operators';
import { MenuService } from '../services/menu.service';
import { UserService } from '../services/user.service';
import { OrderModel } from '../models/order-model';
import {FoodModel, FOOD_CATEGORY} from '../models/food-model';
import { TableService } from '../services/table.service';
import { TableModel } from '../models/table-model';
export enum OPEN_TAB { ADDWA, ASSTA, CREATERE, EDITMEN };

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css']
})
export class ManagerViewComponent implements OnInit {

  openTab: OPEN_TAB;
  OpenTab = OPEN_TAB;
  manager: UserModel;
  waiters: UserModel[];
  menu: OrderModel[];
  menuApps: FoodModel[];
  menuSides:FoodModel[] ;
  menuEntrees:FoodModel[];
  menuDesserts:FoodModel[];
  waiterList: UserModel[];
  tables: TableModel[];
  constructor(private authService: AuthenticationService, private router:Router, private menuService: MenuService, 
    private userService:UserService,
    private _tableService: TableService
    
    ) {
    this.openTab = OPEN_TAB.ASSTA;
   }

  ngOnInit() {
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.manager = user;
     });
     this.menuService.getMenuObservable().subscribe((menuItems:FoodModel[])=>{
      this.menuApps = menuItems.filter(f => f.category == FOOD_CATEGORY.APPETIZER);
      this.menuSides = menuItems.filter(f => f.category == FOOD_CATEGORY.SIDE);
      this.menuEntrees = menuItems.filter(f => f.category == FOOD_CATEGORY.ENTREE);
      this.menuDesserts = menuItems.filter(f => f.category == FOOD_CATEGORY.DESSERT);
  });
  this._tableService.getAllTables()
      .subscribe((alltables: TableModel[]) => {
        this.tables = alltables; 
      });
    this.userService.getUsers().subscribe((allUsers:UserModel[])=>
    {
      this.waiterList = allUsers.filter(u => u.userType == USER_TYPE.WAITER);
    })
  }

  logoutManager()
  {
    this.authService.logout();
    this.router.navigate(['login']);

  }
}
