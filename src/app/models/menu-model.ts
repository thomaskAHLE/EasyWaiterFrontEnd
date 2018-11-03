
import {FOOD_CATEGORY} from './food-category';
import {Food_Model} from './food-model';
export class Menu_Model{
    appetizers: Food_Model[];
    entrees: Food_Model[];
    sides: Food_Model[];
    desserts : Food_Model[];
    
    add_item(food:Food_Model)
    {
        switch(food.category){

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