import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {TableModel} from '../../models/table-model';
import {RestaurantService} from '../../services/restaurant.service';
import {UserModel} from '../../models/user-model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-assign-tables',
  templateUrl: './assign-tables.component.html',
  styleUrls: ['./assign-tables.component.css']
})
export class AssignTablesComponent implements OnInit {
  // @ViewChild('table') table: ElementRef;
  // @ViewChild('table2') table2: ElementRef;
  // @ViewChild('table3') table3: ElementRef;
  // @ViewChild('table4') table4: ElementRef;
  // @ViewChild('table5') table5: ElementRef;
  // @ViewChild('table6') table6: ElementRef;
  // @ViewChild('table7') table7: ElementRef;
  // @ViewChild('table8') table8: ElementRef;
  // @ViewChild('table9') table9: ElementRef;
  mytable : TableModel;
  // waiterlist : UserModel[] = [];
  waiterlist : string[] = ['Waiter 1','Waiter 2','Waiter 3','Waiter 4'];
  tables: TableModel[] =[];
  constructor(private _tableService:TableService) { }

  ngOnInit() {
   // console.log(this.table2.nativeElement.innerHTML);
    this._tableService.getAllTables().subscribe((alltables:TableModel[])=>{this.tables = alltables;});
  }
  
  clearTable(i){
    this.tables[i].assignedTo = "None";
    this._tableService.updateTableAssignment(this.tables[i]);
    alert("are you sure?");
  }

  updateAssign(waiterlist, i){
   this.tables[i].assignedTo = waiterlist;
   this._tableService.updateTableAssignment(this.tables[i]);
  }
}

