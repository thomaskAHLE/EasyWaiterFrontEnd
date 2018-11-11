import { UserModel } from './user-model';
import { OrderModel, ORDER_STATUS } from './order-model';
import { FoodModel } from './food-model';
export class TableModel {
    tableNumber: number;
    numSeats: number;
    assignedTo: UserModel;
    isActive: boolean;
    Orders: OrderModel[] = [];
    PendingOrders: OrderModel[] = [];

    constructor(tableNumber: number, numSeats: number, assignedTo: UserModel, isActive: boolean, orders: OrderModel[] = [], pendingOrder: OrderModel[] = []) {
        this.tableNumber = tableNumber;
        this.numSeats = numSeats;
        this.assignedTo = assignedTo;
        this.isActive = isActive;
        this.Orders = orders;
        this.PendingOrders = pendingOrder;
    }

    addToPending(foodItem: FoodModel): void {
        const order: OrderModel = new OrderModel(foodItem, this.tableNumber);
        this.PendingOrders.push(order);
    }
    removeFromPending(pendingItem:OrderModel):void{
        this.PendingOrders.splice(this.PendingOrders.indexOf(pendingItem),1)
    }

    readyForPickup():boolean {

        for(let o  of this.Orders){
            if(o.status == ORDER_STATUS.FINISHED)
            return true;
        }
        return false;
    }

}