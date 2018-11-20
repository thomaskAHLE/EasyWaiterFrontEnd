import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {TableModel} from '../../models/table-model';
import {RestaurantService} from '../../services/restaurant.service';
import {UserModel} from '../../models/user-model';

@Component({
  selector: 'app-assign-tables',
  templateUrl: './assign-tables.component.html',
  styleUrls: ['./assign-tables.component.css']
})
export class AssignTablesComponent implements OnInit {
  @ViewChild('table') table: ElementRef;
  @ViewChild('table2') table2: ElementRef;
  @ViewChild('table3') table3: ElementRef;
  @ViewChild('table4') table4: ElementRef;
  @ViewChild('table5') table5: ElementRef;
  @ViewChild('table6') table6: ElementRef;
  @ViewChild('table7') table7: ElementRef;
  @ViewChild('table8') table8: ElementRef;
  @ViewChild('table9') table9: ElementRef;
  mytable : TableModel;
  // waiterlist : UserModel[] = [];
  waiterlist : string[] = ['Waiter 1','Waiter 2','Waiter 3','Waiter 4'];
  constructor() { }

  ngOnInit() {
    console.log(this.table2.nativeElement.innerHTML);
    
  }
  
  // updateAssign(waiter: UserModel){
  //   this.mytable.assignedTo = waiter;
  //   this.table1.nativeElement.innerHTML = waiter.userName;
  // }

  clearTable(i){
    this.table.nativeElement.innerHTML = "None";
  }

  updateAssign(waiterlist, i){
    if(this.table.nativeElement.innerHTML == 2)
      this.table2.nativeElement.innerHTML = waiterlist;
    if(this.table.nativeElement.innerHTML == 3)
      this.table3.nativeElement.innerHTML = waiterlist;
      console.log(i);
  }

  clearTable2(){
    this.table2.nativeElement.innerHTML = "None";
  }

  updateAssign2(waiterlist){
    this.table2.nativeElement.innerHTML = waiterlist;
  }

  clearTable3(){
    this.table3.nativeElement.innerHTML = "None";
  }

  updateAssign3(waiterlist){
    this.table3.nativeElement.innerHTML = waiterlist;
  }

  clearTable4(){
    this.table4.nativeElement.innerHTML = "None";
  }

  updateAssign4(waiterlist){
    this.table4.nativeElement.innerHTML = waiterlist;
  }

  clearTable5(){
    this.table5.nativeElement.innerHTML = "None";
  }

  updateAssign5(waiterlist){
    this.table5.nativeElement.innerHTML = waiterlist;
  }

  clearTable6(){
    this.table6.nativeElement.innerHTML = "None";
  }

  updateAssign6(waiterlist){
    this.table6.nativeElement.innerHTML = waiterlist;
  }

  clearTable7(){
    this.table7.nativeElement.innerHTML = "None";
  }

  updateAssign7(waiterlist){
    this.table7.nativeElement.innerHTML = waiterlist;
  }

  clearTable8(){
    this.table8.nativeElement.innerHTML = "None";
  }

  updateAssign8(waiterlist){
    this.table8.nativeElement.innerHTML = waiterlist;
  }

  clearTable9(){
    this.table9.nativeElement.innerHTML = "None";
  }

  updateAssign9(waiterlist){
    this.table9.nativeElement.innerHTML = waiterlist;
  }
}

