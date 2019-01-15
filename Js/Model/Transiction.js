"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transiction {
    constructor(cust, ship, item, billing, card) {
        this.amount = ((parseInt(item.unit_price)
            * parseInt(item.quantity))
            + parseInt(ship.fee)).toString();
        this.card_number = card.card_number;
        this.card_cvv = card.card_cvv;
        this.card_expiration_datestring = card.card_expiration_date;
        this.card_holder_namestring = card.card_holder_name;
        this.customer = cust;
        this.billing = billing;
        this.shipping = ship;
        this.items[0] = item;
    }
}
exports.Transiction = Transiction;
//# sourceMappingURL=Transiction.js.map