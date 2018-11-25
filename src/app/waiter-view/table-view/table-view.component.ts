import { Component, OnInit } from '@angular/core';
import { TableModel } from '../../models/table-model'
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableService } from 'src/app/services/table.service';
import { ClrModalComponent } from '../clr-modal/clr-modal.component';
import { BackModalComponent } from '../back-modal/back-modal.component';
import { OrderModel, ORDER_STATUS } from 'src/app/models/order-model';
import { RestaurantService } from 'src/app/services/restaurant.service';
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
  canClear:boolean;
  tableOrders: OrderModel[];
 
  constructor(private route: ActivatedRoute, private router: Router, private modal: NgbModal, private _tableService: TableService, private restaurantService: RestaurantService) {

    this.selectedId = this.route.snapshot.params['id'];
  }
  ngOnInit() {
    this._tableService.getTableFromTableNum(this.selectedId)
      .subscribe((tables: TableModel[]) => {
        console.log(tables);
        this.table = tables[0];
        this.restaurantService.getOrderObservableforTable(this.table.tableNumber).subscribe(
          (orders:OrderModel[]) =>
          {
            this.tableOrders = orders.sort((a,b)=> a.status - b.status);
            this.canClear = (this.tableOrders.find(t => t.status != ORDER_STATUS.DELIVERED)? false : true);
          }
        )
        let finished = this.route.snapshot.queryParams['readyForPickup'];
        if (finished) {
          this.openTab = OPEN_TAB.ORDERED;
        }
        else {
          this.openTab = OPEN_TAB.MENU;
        }
      });

  }

  onClickClr() {
    const tableref = this.modal.open(ClrModalComponent);
    tableref.componentInstance.tableNum = this.table.tableNumber;
  }

  onClickBack() {
    if (this.table.PendingOrders.length > 0) {
      const tableref = this.modal.open(BackModalComponent);
    }
    else
      this.router.navigate(['waiter-view']);
  }

}
