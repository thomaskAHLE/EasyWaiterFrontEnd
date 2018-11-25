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
export class CreateReportComponent implements OnInit {

  orders: Observable<OrderModel[]>; 

  constructor(private _reportService: ReportService) { }

  ngOnInit() {
    //this.orders = this._reportService.getOrderObservable(); 
  }

  onSalesGenerate() {
    this._reportService.generateSalesReport(); 
  }

  onEmployeeGenerate() {
    this._reportService.generateEmployeeReport(); 
  }

}
