import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from'@angular/fire/firestore';
import { OrderModel,ORDER_STATUS } from '../models/order-model';
import { FoodModel } from '../models/food-model'; 
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  ordersCollection: AngularFirestoreCollection<OrderModel>; 
  orders: Observable<OrderModel[]>; 
  constructor(private _afs:AngularFirestore) { 
    this.ordersCollection = this._afs.collection('deliveredOrders'); 
    this.orders = this.ordersCollection.valueChanges(); 
    //, ref => {
      //return ref.orderBy('food', 'desc')
    //});
    
  } 


  generateSalesReport()
  {
    
    //var allOrders = delivered.
    
    //.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());  
    //console.log(allOrders); 

    /*var csv = ' ,Times Sold,Gross Sales'; 
    allOrders.forEach(function(row){
      csv+=row.join(','); 
      csv+="\n"; 
    }); 

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'MenuSales_Report.csv';
    hiddenElement.click();*/

}

generateEmployeeReport()
{
    var allOrders = this.ordersCollection.snapshotChanges() as Observable<any[]>;
    var csv = ' ,Total Tables, Total Sales'; 
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
