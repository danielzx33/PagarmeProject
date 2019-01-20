"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shipping {
    constructor(body, multiAdress) {
        this.name = body.shipName,
            this.fee = "100",
            this.delivery_date = new Date().toISOString().substr(0, 10),
            this.expedited = true,
            this.address = multiAdress;
    }
}
exports.Shipping = Shipping;
//# sourceMappingURL=Shipping.js.map