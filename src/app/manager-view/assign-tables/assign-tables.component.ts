import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TableModel } from '../../models/table-model';
import { RestaurantService } from '../../services/restaurant.service';
import { UserModel } from '../../models/user-model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-assign-tables',
  templateUrl: './assign-tables.component.html',
  styleUrls: ['./assign-tables.component.css']
})
export class AssignTablesComponent implements OnInit {
  mytable: TableModel;
  // waiterlist : UserModel[] = [];
  waiterlist: string[] = ['Waiter 1', 'Waiter 2', 'Waiter 3', 'Waiter 4'];
  tables: TableModel[] = [];
  constructor(private _tableService: TableService) { }

  ngOnInit() {
    // console.log(this.table2.nativeElement.innerHTML);
    this._tableService.getAllTables()
      .subscribe((alltables: TableModel[]) => {
        console.log(alltables)
        this.tables = alltables; 
        this.tables.forEach(t => console.log(t.assignedTo))
      });
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

  updateAssign(waiterlist, i: number) {
    let tableToAssign: TableModel = this.tables.find(t => t.tableNumber == i);
    tableToAssign.assignedTo = waiterlist;
    this._tableService.updateTableAssignment(tableToAssign);
  }
}

