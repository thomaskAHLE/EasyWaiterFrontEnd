import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
export class AssignTablesComponent implements OnInit {
  mytable: TableModel;
  // waiterlist : UserModel[] = [];
  waiterlist: string[] = ['Waiter 1', 'Waiter 2', 'Waiter 3', 'Waiter 4'];
  waiterList: UserModel[] = [];
  tables: TableModel[] = [];
  constructor(private _tableService: TableService, private _userService: UserService) {
   }

  ngOnInit() {
    this._tableService.getAllTables()
      .subscribe((alltables: TableModel[]) => {
        this.tables = alltables; 
      });
    this._userService.getUsers().subscribe((allUsers:UserModel[])=>
    {
      this.waiterList = allUsers.filter(u => u.userType == USER_TYPE.WAITER);
      console.log(this.waiterList);
    })
    console.log('work plz');
    
  }

  clearTable(i: number) {
    console.log(this.tables);
    let tableToClear: TableModel = this.tables.find(t => t.tableNumber == i);
    console.log(tableToClear);
    tableToClear.assignedTo = 'none';
    this._tableService.updateTableAssignment(tableToClear);
    alert("are you sure?");
  }

  activateTable(tableToActivate:TableModel){
    console.log('activating table' + tableToActivate);
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

