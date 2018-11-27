import { Component, Input } from '@angular/core';
import { TableModel } from '../../models/table-model';
import { UserModel } from '../../models/user-model';
import { TableService } from 'src/app/services/table.service';

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

  /* constructor:
   * @param tableService: injected for table assignment and table activation
   */  
  constructor(private tableService: TableService) {
   }

  /* activateTable
  * @param tableToActivate: table to activate
  * if table is not already activated, activates it and updates it in database
  */  
  activateTable(tableToActivate:TableModel){
    if(!tableToActivate.isActive)
    {
      tableToActivate.isActive = true;
      this.tableService.updateTableisActive(tableToActivate);
    }
  }
  /* updateAssign
  * @param waiter: waiter to assign to table
  * @param tableToAssign: table to set assignment
  * changes assignment to waiter, updates in database
  * if table is not active, activates table
  */ 
  updateAssign(waiter:string, tableToAssign:TableModel) { 
    tableToAssign.assignedTo = waiter;
    this.tableService.updateTableAssignment(tableToAssign);
    if(!tableToAssign.isActive)
    {
      tableToAssign.isActive = true;
      this.tableService.updateTableisActive(tableToAssign);
    }
  }
}

