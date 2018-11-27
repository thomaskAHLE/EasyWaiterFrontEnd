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

/* constuctor: constuctor for table model*/
constructor(tableNumber, numSeats, assignedTo, isActive, key:string = null){
    this.tableNumber = tableNumber;
    this.numSeats = numSeats;
    this.assignedTo = assignedTo;
    this.isActive = isActive;
    this.$key = key;       

    }

    /* addToPending: gets menu item makes it into an Order model and adds to pending order array
     * @param pendingFood: food to add to pending
    */
    addToPending(pendingFood: FoodModel): void {
        const order: OrderModel = new OrderModel(pendingFood, this.tableNumber);
        this.PendingOrders.push(order);
    }
    /* removeFromPending: removes a pending order from the pending order array
     * @param pendingOrder: food to remove from pending order
    */
    removeFromPending(pendingOrder:OrderModel):void{
        this.PendingOrders.splice(this.PendingOrders.indexOf(pendingOrder),1);
    }

    /* removeFromPending: removes a pending order from the pending order array
     * @return jsonObject: tableModel as a JSON Object to store in database
    */
     makeJSONObject(){
         const jsonobj = { tableNumber: this.tableNumber, numSeats: this.numSeats, assignedTo: this.assignedTo, isActive: this.isActive, key: this.$key}
         return jsonobj;
     }

}