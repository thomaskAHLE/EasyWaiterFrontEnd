
import { FoodModel, FOOD_CATEGORY } from './food-model';
export class MenuModel {
    appetizers: FoodModel[] = [];
    entrees: FoodModel[] = [];
    sides: FoodModel[] = [];
    desserts: FoodModel[] = [];

    add_item(food: FoodModel) {
        switch (food.category) {

            case FOOD_CATEGORY.APPETIZER:
                this.appetizers.push(food);
                break;

            case FOOD_CATEGORY.ENTREE:
                this.entrees.push(food);
                break;

            case FOOD_CATEGORY.SIDE:
                this.sides.push(food);
                break;

            case FOOD_CATEGORY.DESSERT:
                this.desserts.push(food);
                break;

            default:
                break;
        }
    }


}