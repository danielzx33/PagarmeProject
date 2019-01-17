"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pagarme_1 = __importDefault(require("pagarme"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const Customer_1 = require("./Model/Customer");
const Shipping_1 = require("./Model/Shipping");
const Item_1 = require("./Model/Item");
const Transaction_1 = require("./Model/Transaction");
const Billing_1 = require("./Model/Billing");
const adress_1 = require("./Model/adress");
const Card_1 = require("./Model/Card");
const CompanyBalance_1 = require("./Script/CompanyBalance");
//------config server
const server = express_1.default();
server.set("view engine", "ejs");
server.set("views", path_1.default.join(__dirname, "/Views"));
server.use(express_1.default.static(__dirname));
server.use(body_parser_1.default.urlencoded({ extended: true }));
//-----end config
//-----Home page
server.get("/", (req, res, next) => {
    res.render("index");
});
server.post("/comprar", (req, res, next) => {
    // -----Fake db to find item
    const itens = [
        { id: 1234, name: "Zanpakutou", UnitValue: 20000 },
        { id: 2345, name: "Chapeu de Palha", UnitValue: 5000 }
    ];
    let Split = [
        { recipient_id: "re_cjqz7w03c015ojw6ffot0tdod", charge_processing_fee: true, liable: true, percentage: 30 },
        { recipient_id: "re_cjqtnw06c00i5v86edkmmlwzw", charge_processing_fee: true, liable: false, percentage: 70 }
    ];
    //-------select item
    let finalItem = itens.find(e => e.id == parseInt(req.body.itemName));
    ///--------init values for transaction----////
    let cust = new Customer_1.Customer(req.body);
    let multiAdress = new adress_1.Address(req.body);
    let ship = new Shipping_1.Shipping(req.body, multiAdress);
    let billing = new Billing_1.Billing(req.body, multiAdress);
    let card = new Card_1.Card(req.body);
    let item = new Item_1.Item(req.body, finalItem);
    console.log(req.body.cardNumber, req.body.cardCvv, req.body.cardExpiration, req.body.cardName);
    console.log("======================" + req.body);
    //-------create transaction--------//
    let transaction = new Transaction_1.Transaction(cust, ship, item, billing, card, Split);
    try {
        pagarme_1.default.client.connect({ api_key: 'ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa' })
            .then(client => client.transactions.create(transaction))
            .then(a => res.send(a))
            .catch(erro => console.log(erro.response.errors));
        CompanyBalance_1.getBalanceById("re_cjqtnw06c00i5v86edkmmlwzw").then(res => console.log(res)).catch(e => console.log(e));
        CompanyBalance_1.getBalanceById("re_cjqz7w03c015ojw6ffot0tdod").then(res => console.log(res)).catch(e => console.log(e));
    }
    catch (error) {
        console.log("catch", error);
    }
});
server.listen(3000, () => {
    console.log(`Serviço online!`);
});
//# sourceMappingURL=main.js.map