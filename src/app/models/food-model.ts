import {FOOD_CATEGORY} from './food-category';
export class Food_Model
{
    name:string;
    price: number;
    category:FOOD_CATEGORY;
    constructor(name:string, price:number, category:FOOD_CATEGORY)
    {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}