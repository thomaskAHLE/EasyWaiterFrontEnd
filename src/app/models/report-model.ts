
export class ReportModel{

    employee:string;
    name:string;
    price:string;
    key:string;
    constructor( employee:string, name:string, price:string, key:string = null)
    {
        this.name = name;
        this.employee = employee;
        this.price = price;
        this.key = key;
    }

}