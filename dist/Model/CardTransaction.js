"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = require("./Transaction");
class CardTransation extends Transaction_1.Transaction {
    constructor(cust, ship, item, billing, split, card, type) {
        super(cust, ship, item, billing, split, type);
        this.card_number = card.card_number;
        this.card_cvv = card.card_cvv;
        this.card_expiration_date = card.card_expiration_date;
        this.card_holder_name = card.card_holder_name;
    }
}
exports.CardTransation = CardTransation;
//# sourceMappingURL=CardTransaction.js.map