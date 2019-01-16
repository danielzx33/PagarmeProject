"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(cust, ship, item, billing, card, split) {
        this.amount = ((parseInt(item.unit_price)
            * parseInt(item.quantity))
            + parseInt(ship.fee)).toString();
        this.card_number = card.card_number;
        this.card_cvv = card.card_cvv;
        this.card_expiration_date = card.card_expiration_date;
        this.card_holder_name = card.card_holder_name;
        this.customer = cust;
        this.billing = billing;
        this.shipping = ship;
        this.items = [item];
        this.split_rules = split;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map