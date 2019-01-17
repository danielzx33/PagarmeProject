"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(body) {
        this.card_number = body.cardNumber;
        this.card_cvv = body.cardCvv;
        this.card_expiration_date = body.cardExpiration;
        this.card_holder_name = body.cardName;
    }
}
exports.Card = Card;
//# sourceMappingURL=Card.js.map