import { UserModel } from './user-model';
import { OrderModel, ORDER_STATUS } from './order-model';
import { FoodModel } from './food-model';
export class TableModel {
    tableNumber: number;
    numSeats: number;
    assignedTo: string;
    isActive: boolean;
    PendingOrders: OrderModel[] = [];
    $key:string;

constructor(tableNum, numSeats, assignedTo, isActive, key:string = null){
    console.log('table constructor called');
    this.tableNumber = tableNum;
    this.numSeats = numSeats;
    this.assignedTo = assignedTo;
    this.isActive = isActive;
    this.$key = key;       
    console.log(this.tableNumber, this.numSeats, this.assignedTo, this.isActive);

    }

    addToPending(foodItem: FoodModel): void {
        const order: OrderModel = new OrderModel(foodItem, this.tableNumber);
        this.PendingOrders.push(order);
    }
    removeFromPending(pendingItem:OrderModel):void{
        this.PendingOrders.splice(this.PendingOrders.indexOf(pendingItem),1);
    }

     makeJSONString(){
         const jsonobj = { tableNumber: this.tableNumber, numSeats: this.numSeats, assignedTo: this.assignedTo, isActive: this.isActive, key: this.$key}
         return jsonobj;
     }

}