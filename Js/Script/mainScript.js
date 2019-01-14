"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
console.log("krl maluco");
jquery_1.default("#itemName").change(() => {
    let quantity = jquery_1.default("#itemQuantity").val();
    console.log(jquery_1.default("#itemName").val());
    quantity = quantity.valueOf() > 0 ? quantity.valueOf() : 1;
    jquery_1.default("#itemSum").val(quantity);
});
//# sourceMappingURL=mainScript.js.map