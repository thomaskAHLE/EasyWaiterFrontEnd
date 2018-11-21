import { Component, OnInit } from '@angular/core';
import { TableModel } from '../../models/table-model'
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { TableService } from 'src/app/services/table.service';
export enum OPEN_TAB { MENU, IN_PROGRESS, ORDERED };

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  table: TableModel;
  selectedId: number;
  openTab: OPEN_TAB;
  OpenTab = OPEN_TAB;
  constructor(private route: ActivatedRoute, private router: Router, private _restaurantService: RestaurantService, private _tableService: TableService) {
    this.openTab = OPEN_TAB.MENU;
    this.selectedId = this.route.snapshot.params['id'];
    
  }
  onBack() {
    this.router.navigate(['waiter-view']);
    //todo popup if pending isn't empty

  }
  ngOnInit() {
  this._tableService.getTableFromTableNum(this.selectedId)
      .subscribe((tables:TableModel[])=>{
        console.log(tables)
        this.table = tables[0]
      });
  }

}
