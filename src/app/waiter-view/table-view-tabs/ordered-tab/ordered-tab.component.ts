import { Component, OnInit, Input } from '@angular/core';
import {FoodModel} from '../../../models/food-model';
import { TableModel } from 'src/app/models/table-model';
@Component({
  selector: 'app-ordered-tab',
  templateUrl: './ordered-tab.component.html',
  styleUrls: ['./ordered-tab.component.css']
})
export class OrderedTabComponent implements OnInit {
  @Input()
  table: TableModel;
 
  constructor() { }
  
  
  ngOnInit() {
  }

}
