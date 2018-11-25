import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { TableModel } from '../../models/table-model';
import { RestaurantService } from '../../services/restaurant.service';
import { UserModel, USER_TYPE } from '../../models/user-model';
import { TableService } from 'src/app/services/table.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-assign-tables',
  templateUrl: './assign-tables.component.html',
  styleUrls: ['./assign-tables.component.css']
})
export class AssignTablesComponent {
  mytable: TableModel;

  @Input()
  waiterList: UserModel[] = [];
  @Input()
  tables: TableModel[] = [];
  constructor(private _tableService: TableService, private _userService: UserService) {
   }

  activateTable(tableToActivate:TableModel){
    if(!tableToActivate.isActive)
    {
      tableToActivate.isActive = true;
      this._tableService.updateTableisActive(tableToActivate);
    }
  }

  updateAssign(waiterlist, tableToAssign:TableModel) {
    
    tableToAssign.assignedTo = waiterlist;
    this._tableService.updateTableAssignment(tableToAssign);
    if(!tableToAssign.isActive)
    {
      tableToAssign.isActive = true;
      this._tableService.updateTableisActive(tableToAssign);
    }
  }
}

