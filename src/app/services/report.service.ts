import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from'@angular/fire/firestore';
import { OrderModel,ORDER_STATUS } from '../models/order-model';
import { FoodModel } from '../models/food-model'; 
import { DeliveredOrderModel } from '../models/deliveredorder-model'; 
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  ordersCollection: AngularFirestoreCollection<DeliveredOrderModel>; 
  constructor(private _afs:AngularFirestore) { 
    this.ordersCollection = this._afs.collection('deliveredOrders');
  } 

  generateReport()
  {
    var allOrders = this.ordersCollection.snapshotChanges() as Observable<any[]>;
    var csv = 'Report'; 
    allOrders.forEach(function(row){
      csv+=row.join(','); 
      csv+="\n"; 
    }); 

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'report.csv';
    hiddenElement.click();

}
}
