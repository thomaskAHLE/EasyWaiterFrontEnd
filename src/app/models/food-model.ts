
export enum FOOD_CATEGORY{ APPETIZER, SIDE, ENTREE, DESSERT };
export class FoodModel
{
    public name:string;
    public price: number;
    public category:FOOD_CATEGORY;
    constructor(name:string, price:number, category:FOOD_CATEGORY)
    {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}