"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = require("./Transaction");
class CardTransation extends Transaction_1.Transaction {
    // customer:Customer; 
    // billing:Billing ;
    // shipping:Shipping;
    // items:Item[];
    // split_rules: SplitRule [];
    constructor(cust, ship, item, billing, split, card, type) {
        super(cust, ship, item, billing, split, type);
        // this.amount = ((parseInt( item.unit_price)
        //                  * parseInt(item.quantity))
        //                  + parseInt(ship.fee)).toString();
        // this.payment_method = type
        this.card_number = card.card_number;
        this.card_cvv = card.card_cvv;
        this.card_expiration_date = card.card_expiration_date;
        this.card_holder_name = card.card_holder_name;
        // this.customer = cust;
        // this.billing = billing;
        // this.shipping = ship;
        // this.items = [item];
        // this.split_rules = split
    }
}
exports.CardTransation = CardTransation;
//# sourceMappingURL=CardTransaction.js.map