import { FoodModel, FOOD_CATEGORY } from "./food-model";
export enum ORDER_STATUS { FINISHED, IN_PROGRESS, TO_DO, DELIVERED };

export class OrderModel  {

    public static OrderStatusStrings: string[] = ['Finished', 'In Progress', 'To Do', 'Delivered' ];
    public $key: string;
    public tableNumber: number;
    public status: ORDER_STATUS = ORDER_STATUS.TO_DO;
    public food:FoodModel;
    constructor( food:FoodModel, tableNumber: number, status: ORDER_STATUS = ORDER_STATUS.TO_DO, key: string = null) {
        this.$key = key;
        this.food = food;
        this.tableNumber = tableNumber;
        this.status = status;
    }
    /* getStatusString
     * @return string for status of order used for UI
    */
    getStatusString() :string {
        return OrderModel.OrderStatusStrings[this.status];
    }
}