import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import {MenuModel} from '../../../models/menu-model'
import { TableModel } from 'src/app/models/table-model';
import {FoodModel} from '../../../models/food-model';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css']
})
export class MenuTabComponent implements OnInit {
  @Input()
  table: TableModel;
  
  menu: MenuModel;
  constructor(private _menuservice: MenuService) { 
  }

  addFoodToPending(food:FoodModel){
    this.table.addToPending(food);
  }

  ngOnInit( ) {
    this.menu = this._menuservice.getMenu();
  }

}
