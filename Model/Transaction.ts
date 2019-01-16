import { Customer } from "./Customer";
import { Billing } from "./Billing";
import { Shipping } from "./Shipping";
import { Item } from "./Item";
import { Card } from "./Card";
import { SplitRule } from "./SplitRule";

export class Transaction {
    amount:String;
    card_number:string;
    card_cvv:string;
    card_expiration_date:string;
    card_holder_name:string;
    customer:Customer; 
    billing:Billing ;
    shipping:Shipping;
    items:Item[];
    split_rules: SplitRule [];

    constructor(cust: Customer, ship: Shipping, item: Item, billing :Billing, card:Card, split:SplitRule[] ){
        this.amount = ((parseInt( item.unit_price)
                         * parseInt(item.quantity))
                         + parseInt(ship.fee)).toString();
        this.card_number = card.card_number;
        this.card_cvv   = card.card_cvv;
        this.card_expiration_date = card.card_expiration_date;
        this.card_holder_name = card.card_holder_name;
        this.customer = cust;
        this.billing = billing;
        this.shipping = ship;
        this.items = [item];
        this.split_rules = split
    }
     
}