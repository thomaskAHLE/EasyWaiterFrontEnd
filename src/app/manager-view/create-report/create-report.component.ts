import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service'
import {FoodModel} from '../../models/food-model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { OrderModel } from 'src/app/models/order-model';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})

/*
 Currently not functional
*/
export class CreateReportComponent implements OnInit {

  orders: Observable<OrderModel[]>; 
  /* constructor
   * @param reportService: injected to use reportServiceFunctions
  */
  constructor(private reportService: ReportService) { }

  ngOnInit() {
   
  }
  /* onSalesGenerate
   * uses reportService to generateSalesReport
   */
  onSalesGenerate() {
    this.reportService.generateSalesReport(); 
  }

  /* onEmployeeGenerate
   * uses reportService to generateEmployeeReport
   */
  onEmployeeGenerate() {
    this.reportService.generateEmployeeReport(); 
  }

}
