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

  /* constructor 
   * @param activeModal: injected to dismiss modal when done
   * @param router: injected to route back to waiterview 
   * @param restaurantService: injected to call clear table
   * @param tableService: injected to make a table inactive
  */
  constructor(public activeModal: NgbActiveModal, private router: Router, private restaurantService: RestaurantService, 
              private _tableService: TableService) { }

  /* ngOnInit() gets table from table number
  */ 
  ngOnInit() {
    this._tableService.getTableFromTableNum(this.tableNum)
      .subscribe((tables:TableModel[])=>{
        this.table = tables[0]
      });
  }
  /* onClearTables()
   * clears table in database
   * sets table as inactive
   * routes back to waiterview
  */ 
  onClearTables(){
    this.restaurantService.clearTablesOrders(this.table);
    this.table.isActive = false;
    this._tableService.updateTableisActive(this.table);
    this.router.navigate(['waiter-view']);
    this.activeModal.dismiss();
  }

}
