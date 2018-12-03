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
  /* constructor
   * @params afs: Injected afs into service to get menu from database
  */
  constructor(private _afs:AngularFirestore) { 
    this.menuCollection = this._afs.collection('menu');
  }

  /* addToMenu: adds food to menu
   * @params food: food to add to menu
  */
  addToMenu(food:FoodModel):void
  {
    this.menuCollection.add(JSON.parse(JSON.stringify(food)));
  }
  /* getMenuObservable: used to subscribe to menu observable
   * @params afs: Injected afs into service to get menu from database
  */
  getMenuObservable(): Observable<FoodModel[]>{
    return this.menuCollection.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new FoodModel(o.payload.doc.data().name,o.payload.doc.data().price, o.payload.doc.data().category, o.payload.doc.data().description);  data.$key = o.payload.doc.id; return data;}
    )));
  }

  /* updateMenuItem: updates changed menu item in database
   * @params foodToUpdate: food item to update
  */
  updateMenuItem(foodToUpdate:FoodModel):void
  {
    this.menuCollection.doc(foodToUpdate.$key).update({name:foodToUpdate.name, price: foodToUpdate.price, category: foodToUpdate.category, description: foodToUpdate.description});
  }

  /* removeMenuItem: removes menu item from database
   * @params food: foodItem to remove
  */
  removeMenuItem(food:FoodModel):void
  {
    let foodToRemoveDoc:AngularFirestoreDocument<FoodModel> = this._afs.doc<FoodModel>(`menu/${food.$key}`);
    foodToRemoveDoc.delete();
  }
}





