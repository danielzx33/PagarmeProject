import { Customer } from "./Customer";
import { Billing } from "./Billing";
import { Shipping } from "./Shipping";
import { Item } from "./Item";
import { SplitRule } from "./SplitRule";

export class Transaction{

    
    amount:String;
    payment_method: string;
    // card_number:string;
    // card_cvv:string;
    // card_expiration_date:string;
    // card_holder_name:string;
    customer:Customer; 
    billing:Billing ;
    shipping:Shipping;
    items:Item[];
    split_rules: SplitRule [];

    constructor(cust: Customer, ship: Shipping, item: Item, billing :Billing, split:SplitRule[], type: string){
        
        this.amount = ((parseInt( item.unit_price)
                         * parseInt(item.quantity))
                         + parseInt(ship.fee)).toString();
        this.payment_method = type
        this.customer = cust;
        this.billing = billing;
        this.shipping = ship;
        this.items = [item];
        this.split_rules = split
    }
}