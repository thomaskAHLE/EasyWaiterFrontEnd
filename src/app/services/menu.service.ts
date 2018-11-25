import { Injectable } from '@angular/core';
import {FoodModel} from '../models/food-model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from'@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuCollection: AngularFirestoreCollection;
  foodlist: FoodModel[] =[];
  constructor(private _afs:AngularFirestore) { 
    this.menuCollection = this._afs.collection('menu');
  }

  addToMenu(food:FoodModel):void
  {
    this.menuCollection.add(JSON.parse(JSON.stringify(food)));
  }
  getMenuObservable(): Observable<any[]>{
    return this.menuCollection.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new FoodModel(o.payload.doc.data().name,o.payload.doc.data().price, o.payload.doc.data().category, o.payload.doc.data().description);  data.$key = o.payload.doc.id; return data;}
    )));
  }

  updateMenuItem(food:FoodModel):void
  {
    this.menuCollection.doc(food.$key).update({name:food.name, price: food.price, category: food.category, description: food.description});
  }

  removeMenuItem(food:FoodModel):void
  {
    let foodToRemoveDoc:AngularFirestoreDocument<FoodModel> = this._afs.doc<FoodModel>(`menu/${food.$key}`);
    foodToRemoveDoc.delete();
  }
}





