import { FoodModel, FOOD_CATEGORY } from "./food-model";
export enum ORDER_STATUS { TO_DO, IN_PROGRESS, FINISHED, DELIVERED };

export class OrderModel extends FoodModel {

    public static OrderStatusStrings: string[] = ['To do', 'In Progress', 'Finished', 'Delivered' ];
    public tableNumber: number;
    public status: ORDER_STATUS = ORDER_STATUS.TO_DO;
    constructor(food:FoodModel, tableNumber: number) {
        super(food.name, food.price, food.category);
        this.tableNumber = tableNumber;
        this.status = ORDER_STATUS.TO_DO;
    }
    getStatusString() :string {
        return OrderModel.OrderStatusStrings[this.status];

    }
}