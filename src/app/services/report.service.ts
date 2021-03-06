import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from'@angular/fire/firestore';
import { OrderModel,ORDER_STATUS } from '../models/order-model';
import { FoodModel } from '../models/food-model'; 
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { UserService } from './user.service';
import { UserModel } from '../models/user-model';
import { MenuService } from './menu.service';
import { ReportModel } from '../models/report-model';

@Injectable({
  providedIn: 'root'
})

/* Currently not funcitonal*/
export class ReportService {

  ordersCollection: AngularFirestoreCollection<ReportModel>; 
  orders: Observable<ReportModel[]>; 
  allUsers: UserModel[];
  menuItems:FoodModel[];
  salesReportMap: Map<string,Number>;
  employeeReportMap:Map<string,Number>;
  constructor(private _afs:AngularFirestore, private userService:UserService, private menuService: MenuService) { 
    this.ordersCollection = this._afs.collection('deliveredOrders'); 
    this.userService.getUsers().subscribe((users:UserModel[]) => this.allUsers = users);
    this.menuService.getMenuObservable().subscribe((foods:FoodModel[])=> this.menuItems = foods);
  } 


  /* generates sales report for menu items*/
  generateSalesReport()
  { 
    this.salesReportMap = new Map<string, Number>();
    this.employeeReportMap = new Map<string, Number>();
    this.salesReportMap.clear();
    this.employeeReportMap.clear();
    this.orders= this.ordersCollection.snapshotChanges().pipe(map(report=> report.map(r=>
      {const data = new ReportModel(r.payload.doc.data().employee, r.payload.doc.data().name, r.payload.doc.data().price, r.payload.doc.id); return data})));
    this.orders.subscribe((reports:ReportModel[]) => {
      console.log(reports);
        reports.forEach(r =>
          {
            if(this.employeeReportMap.has(r.employee))
            {
              this.employeeReportMap[r.employee] =  Number(this.employeeReportMap.get(r.employee))+ Number(r.price);
              console.log(Number(r.price));
            }
            else
            {
              this.employeeReportMap.set(r.employee, Number(r.price));
              console.log(Number(r.price));
            }
            if(this.salesReportMap.has(r.name))
            {
              this.salesReportMap[r.name] = Number(this.salesReportMap.get(r.name)) + Number(r.price);
              console.log(Number(r.price));
            }
            else
            {
              this.salesReportMap.set(r.name, Number(r.price));
              console.log(Number(r.price));
            }
          })

    console.log("testing salesReport map");
    console.log(this.salesReportMap);

    console.log("testing employeeReportMap");
    console.log(this.employeeReportMap);
    })

    //var allOrders = delivered.
    
    //.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());  
    //console.log(allOrders); 

    var csv = 'Employee,Gross Sales\nThomas,200.00\nAndrew,14.00\nMegan,1315.99'; 
    //var sales = this.employeeReportMap.get("Thomas"); 
    //console.log("printing get thomas"); 
    //console.log(sales); 
    //reports.forEach(r => {
      //csv+= r.name + ",";  
      //csv+="\n"; 
    //})}) 

    console.log("printing csv"); 
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'EmployeeSales_Report.csv';
    hiddenElement.click();

}

/* generates report for all employees */
generateEmployeeReport()
{
    var allOrders = this.ordersCollection.snapshotChanges() as Observable<any[]>;
    var csv = 'Employee, Total Sales'; 
    allOrders.forEach(function(row){
      csv+=row.join(','); 
      csv+="\n"; 
    }); 

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Employee_Report.csv';
    hiddenElement.click();
}
}
