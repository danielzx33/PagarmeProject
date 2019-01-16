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
    let ret;
    return new Promise((resolve, reject) => {
        https.get(`https://api.pagar.me/1/recipients/${id}/balance?api_key=${apiKey}`, (resp) => {
            resp.on("data", (a) => {
                value += a;
            });
            resp.on("error", (a) => {
                console.log(a);
            });
            resp.on("end", () => {
                resolve(JSON.parse(value));
            });
        });
    });
};
//# sourceMappingURL=CompanyBalance.js.map