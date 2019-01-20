"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(body, finalItem) {
        this.quantity = body.itemQuantity;
        this.title = finalItem.name;
        this.tangible = true;
        this.unit_price = finalItem.UnitValue.toString();
        this.id = finalItem.id.toString();
    }
}
exports.Item = Item;
//# sourceMappingURL=Item.js.map