import { Component, OnInit } from '@angular/core';
import { TableModel } from '../../models/table-model'
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableService } from 'src/app/services/table.service';
import { ClrModalComponent } from '../clr-modal/clr-modal.component';
import { BackModalComponent } from '../back-modal/back-modal.component';
import { OrderModel, ORDER_STATUS } from 'src/app/models/order-model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { FoodModel, FOOD_CATEGORY } from 'src/app/models/food-model';
import { MenuService } from 'src/app/services/menu.service';
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
  menuApps: FoodModel[] = [];
  menuSides:FoodModel[] = [];
  menuEntrees:FoodModel[]=[];
  menuDesserts:FoodModel[]=[];
 
  constructor(private route: ActivatedRoute, private router: Router, private modal: NgbModal, private _tableService: TableService, private restaurantService: RestaurantService, private _menuService: MenuService) {

    this.selectedId = this.route.snapshot.params['id'];
  }
  ngOnInit() {
    this._tableService.getTableFromTableNum(this.selectedId)
      .subscribe((tables: TableModel[]) => {
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
      this._menuService.getMenuObservable().subscribe((menuItems:FoodModel[])=>{
        this.menuApps = menuItems.filter(f => f.category == FOOD_CATEGORY.APPETIZER);
        this.menuSides = menuItems.filter(f => f.category == FOOD_CATEGORY.SIDE);
        this.menuEntrees = menuItems.filter(f => f.category == FOOD_CATEGORY.ENTREE);
        this.menuDesserts = menuItems.filter(f => f.category == FOOD_CATEGORY.DESSERT);
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
