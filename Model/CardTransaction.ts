import { Customer } from "./Customer";
import { Billing } from "./Billing";
import { Shipping } from "./Shipping";
import { Item } from "./Item";
import { Card } from "./Card";
import { SplitRule } from "./SplitRule";
import { Transaction } from "./Transaction";

export class CardTransation extends Transaction {
    // amount:String;
    // payment_method: string;
    card_number:string;
    card_cvv:string;
    card_expiration_date:string;
    card_holder_name:string;
    // customer:Customer; 
    // billing:Billing ;
    // shipping:Shipping;
    // items:Item[];
    // split_rules: SplitRule [];
    

    constructor(cust: Customer, ship: Shipping, item: Item, billing :Billing, split:SplitRule[], card:Card, type: string){

        super(cust,ship,item,billing,split,type);

        // this.amount = ((parseInt( item.unit_price)
        //                  * parseInt(item.quantity))
        //                  + parseInt(ship.fee)).toString();
        // this.payment_method = type
        this.card_number = card.card_number;
        this.card_cvv   = card.card_cvv;
        this.card_expiration_date = card.card_expiration_date;
        this.card_holder_name = card.card_holder_name;
        // this.customer = cust;
        // this.billing = billing;
        // this.shipping = ship;
        // this.items = [item];
        // this.split_rules = split
    }
     
}