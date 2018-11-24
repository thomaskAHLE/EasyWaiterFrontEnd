import { FoodModel, FOOD_CATEGORY } from "./food-model";
import { OrderModel, ORDER_STATUS } from "./order-model"; 

export class DeliveredOrderModel  {

    public $key: string;
    public tableNumber: number;
    public status: ORDER_STATUS = ORDER_STATUS.DELIVERED;
    public food:FoodModel;
    constructor( food:FoodModel, tableNumber: number, status: ORDER_STATUS = ORDER_STATUS.DELIVERED, key: string = null) {
        this.$key = key;
        this.food = food;
        this.tableNumber = tableNumber;
        this.status = status;
    }
    getStatusString() :string {
        return OrderModel.OrderStatusStrings[this.status];
    }
}