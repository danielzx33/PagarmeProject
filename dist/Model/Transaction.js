"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(cust, ship, item, billing, split, type) {
        this.amount = ((parseInt(item.unit_price)
            * parseInt(item.quantity))
            + parseInt(ship.fee)).toString();
        this.payment_method = type;
        this.customer = cust;
        this.billing = billing;
        this.shipping = ship;
        this.items = [item];
        this.split_rules = split;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map