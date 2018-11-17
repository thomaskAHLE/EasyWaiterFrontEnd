import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import {MenuModel} from '../../../models/menu-model'
import { TableModel } from 'src/app/models/table-model';
import {FoodModel, FOOD_CATEGORY} from '../../../models/food-model';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css']
})
export class MenuTabComponent implements OnInit {
  @Input()
  table: TableModel;
  menuApps: FoodModel[] = [];
  menuSides:FoodModel[] = [];
  menuEntrees:FoodModel[]=[];
  menuDesserts:FoodModel[]=[];
  menu: MenuModel;
  constructor(private _menuService: MenuService) { 
  }

  addFoodToPending(food:FoodModel){
    this.table.addToPending(food);
  }

  ngOnInit( ) {
    this._menuService.getOrderObservable().subscribe((menuItems:FoodModel[])=>{
      this.menuApps = menuItems.filter(f => f.category == FOOD_CATEGORY.APPETIZER);
      this.menuSides = menuItems.filter(f => f.category == FOOD_CATEGORY.SIDE);
      this.menuEntrees = menuItems.filter(f => f.category == FOOD_CATEGORY.ENTREE);
      this.menuDesserts = menuItems.filter(f => f.category == FOOD_CATEGORY.DESSERT);
  });
  }

}
