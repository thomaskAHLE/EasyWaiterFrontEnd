import { Component, OnInit, Input } from '@angular/core';
import { TableModel } from 'src/app/models/table-model';
import {FoodModel, FOOD_CATEGORY} from '../../../models/food-model';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css']
})
export class MenuTabComponent  {
  @Input()
  table: TableModel;
  @Input()
  menuApps: FoodModel[];
  @Input()
  menuSides:FoodModel[];
  @Input()
  menuEntrees:FoodModel[];
  @Input()
  menuDesserts:FoodModel[];
 
  /* constructor*/
   constructor() { }

  /* addFoodToPending 
  * @param foodToAdd: food to add to table's pending orders
  */
  addFoodToPending(foodToAdd:FoodModel){
    this.table.addToPending(foodToAdd);
  }

}
