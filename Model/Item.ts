export class Item{

    public id: string;
    public title: string;
    public unit_price: string;
    public quantity: string;
    public tangible: boolean;

    constructor(body, finalItem){
        this.quantity = body.itemQuantity;
        this.title = finalItem.name;
        this.tangible = true;
        this.unit_price = finalItem.UnitValue.toString();
        this.id = finalItem.id.toString();    }
}