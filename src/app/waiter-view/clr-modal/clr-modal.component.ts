import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { TableService } from 'src/app/services/table.service';
import { TableModel } from '../../models/table-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clr-modal',
  templateUrl: './clr-modal.component.html',
  styleUrls: ['./clr-modal.component.css']
})
export class ClrModalComponent implements OnInit {
  tableNum : number;
  table: TableModel;
  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute, private router: Router, private _restaurantService: RestaurantService, private _tableService: TableService) { }

  ngOnInit() {
    this._tableService.getTableFromTableNum(this.tableNum)
      .subscribe((tables:TableModel[])=>{
        console.log(tables)
        this.table = tables[0]
      });
  }

  onClearTables(){
    this._restaurantService.clearTablesOrders(this.tableNum);
    this.table.isActive = false;
    this._tableService.updateTableisActive(this.table);
    this.router.navigate(['waiter-view']);
    this.activeModal.dismiss();
  }

}
