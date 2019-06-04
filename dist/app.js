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
const CardTransaction_1 = require("./Model/CardTransaction");
const Billing_1 = require("./Model/Billing");
const Address_1 = require("./Model/Address");
const Card_1 = require("./Model/Card");
const CompanyBalance_1 = require("./Script/CompanyBalance");
const Transaction_1 = require("./Model/Transaction");
//------config server
const app = express_1.default();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "/Views"));
app.use(express_1.default.static(__dirname));
app.use(body_parser_1.default.urlencoded({ extended: true }));
//-----end config
//-----Home page
app.get("/", (req, res, next) => {
    res.render("buyItem");
    next();
});
app.post("/finalizarCompra", (req, res, next) => {
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
    let multiAdress = new Address_1.Address(req.body);
    let ship = new Shipping_1.Shipping(req.body, multiAdress);
    let billing = new Billing_1.Billing(req.body, multiAdress);
    let card = new Card_1.Card(req.body);
    let item = new Item_1.Item(req.body, finalItem);
    let transaction;
    let transType = req.body.paymentType;
    //-------create transaction--------//
    if (transType == "boleto") {
        transaction = new Transaction_1.Transaction(cust, ship, item, billing, Split, transType);
    }
    else {
        transaction = new CardTransaction_1.CardTransation(cust, ship, item, billing, Split, card, transType);
    }
    //--------run transaction---------//
    try {
        pagarme_1.default.client.connect({ api_key: 'ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa' })
            .then(client => client.transactions.create(transaction))
            .then(response => console.log(response))
            .catch(error => console.log(error.response.errors));
    }
    catch (error) {
        console.log(error);
    }
    //Retorna o Balanço
    let companiesBalance = new Array();
    CompanyBalance_1.getBalanceById(Split[0].recipient_id).then(Company => {
        companiesBalance.push(Company);
    }).then(() => {
        CompanyBalance_1.getBalanceById(Split[1].recipient_id).then(Company => {
            companiesBalance.push(Company);
        }).then(() => {
            res.render("Companies", { companies: companiesBalance });
            console.log(companiesBalance);
        });
    }).catch(e => console.log(e));
});
app.listen(3000, () => {
    console.log(`Serviço online!`);
});
//# sourceMappingURL=app.js.map