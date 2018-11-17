import { FoodModel, FOOD_CATEGORY } from "./food-model";
export enum ORDER_STATUS { TO_DO, IN_PROGRESS, FINISHED, DELIVERED };

export class OrderModel  {

    public static OrderStatusStrings: string[] = ['To do', 'In Progress', 'Finished', 'Delivered' ];
    public $key: string;
    public tableNumber: number;
    public status: ORDER_STATUS = ORDER_STATUS.TO_DO;
    public food:FoodModel;
    constructor( food:FoodModel, tableNumber: number, status: ORDER_STATUS = ORDER_STATUS.TO_DO, key: string = null) {
        this.$key = key;
        this.food = food;
        this.tableNumber = tableNumber;
        this.status = status;
        console.log("creating ordermodel");
    }
    getStatusString() :string {
        return OrderModel.OrderStatusStrings[this.status];
    }
}