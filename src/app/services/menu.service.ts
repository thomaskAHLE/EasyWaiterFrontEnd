import { Injectable } from '@angular/core';
import {MenuModel} from '../models/menu-model';
import {FoodModel, FOOD_CATEGORY} from '../models/food-model';
import {AngularFirestore, AngularFirestoreCollection} from'@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const foodList: FoodModel[] = [
  {
    name: 'Wings',
    price: 12.99,
    category: FOOD_CATEGORY.APPETIZER,
    description: 'chicken wings',
    $key:null
    
  },
  {
    name: 'Steak',
    price: 22.99,
    category: FOOD_CATEGORY.ENTREE,
    description: 'hello world',
    $key:null
  },
  {
    name: 'Fries',
    price: 2.99,
    category: FOOD_CATEGORY.SIDE,
    description: 'hello world',
    $key:null
  },
  {
    name: 'Ice Cream',
    price: 7.99,
    category: FOOD_CATEGORY.DESSERT,
    description: 'hello world',
    $key:null
  }
  
  ];

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuCollection: AngularFirestoreCollection;
  foodlist: FoodModel[] =[];
  menu:MenuModel = new MenuModel();
  constructor(private _afs:AngularFirestore) { 
    this.menuCollection = this._afs.collection('menu');
  }
  getMenu (): MenuModel{
    return this.menu;
  }
  getMenuObservable()
  {
    return this.menuCollection.snapshotChanges()
  }
  addToMenu(food:FoodModel)
  {
    this.menuCollection.add(JSON.parse(JSON.stringify(food)));
  }
  getOrderObservable(): Observable<any[]>{
    return this.menuCollection.snapshotChanges().pipe(map(obj => obj.map(o => {const data = new FoodModel(o.payload.doc.data().name,o.payload.doc.data().price, o.payload.doc.data().category, o.payload.doc.data().description);  data.$key = o.payload.doc.id; return data;}
    )));
  }
}




