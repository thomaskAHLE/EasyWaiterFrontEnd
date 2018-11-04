import { Injectable } from '@angular/core';
import {MenuModel} from '../models/menu-model';
import {FoodModel, FOOD_CATEGORY} from '../models/food-model';
const foodList: FoodModel[] = [
  {
    name: 'Wings',
    price: 12.99,
    category: FOOD_CATEGORY.APPETIZER
  },
  {
    name: 'Steak',
    price: 22.99,
    category: FOOD_CATEGORY.ENTREE
  },
  {
    name: 'Fries',
    price: 2.99,
    category: FOOD_CATEGORY.SIDE
  },
  {
    name: 'Ice Cream',
    price: 7.99,
    category: FOOD_CATEGORY.DESSERT
  }
  
  ];

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu:MenuModel = new MenuModel();
  constructor() { 
    for(let i = 0; i < foodList.length; i++)
    {
      this.menu.add_item(foodList[i]);
    }
  }
  getMenu (): MenuModel{
    return this.menu;
  }
}




