
export enum FOOD_CATEGORY{ APPETIZER, SIDE, ENTREE, DESSERT };
export class FoodModel
{
    public name:string;
    public price: number;
    public category:FOOD_CATEGORY;
    public description:string;

    constructor(name:string, price:number, category:FOOD_CATEGORY, description = 'description')
    {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}