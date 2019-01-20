"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const https = __importStar(require("https"));
exports.getBalanceById = (id) => {
    let apiKey = "ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa";
    let value = "";
    return new Promise((resolve, reject) => {
        let balance = new Object();
        https.get(`https://api.pagar.me/1/recipients/${id}/balance?api_key=${apiKey}`, (resp) => {
            resp.on("data", (chunk) => {
                value += chunk;
            });
            resp.on("error", (err) => {
                console.log(err);
            });
            resp.on("end", () => {
                resolve(JSON.parse(value));
            });
        });
    });
};
//# sourceMappingURL=CompanyBalance.js.map