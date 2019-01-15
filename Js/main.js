"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pagarme_1 = __importDefault(require("pagarme"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const Transaction_1 = require("./Model/Transaction");
//config server
const server = express_1.default();
server.set("view engine", "ejs");
server.set("/views", path_1.default.join(__dirname + "Views"));
server.use("/asset", express_1.default.static(__dirname + "/"));
server.use(body_parser_1.default.urlencoded({ extended: true }));
//end config
server.get("/", (req, res, next) => {
    res.render("index");
});
server.post("/comprar", (req, res, next) => {
    ///--------init values for transaction----////
    let cust = {
        external_id: "0002",
        name: req.body.custName,
        type: "Individual",
        country: "br",
        email: req.body.custEmail,
        documents: [{
                number: req.body.custCpf,
                type: "cpf"
            }],
        birthday: req.body.custBirthday,
        phone_numbers: [("+55" + req.body.custPhone)]
    };
    let multiAdress = {
        country: "br",
        state: req.body.shipState,
        city: req.body.shipCity,
        neighborhood: req.body.shipNeighborhood,
        street: req.body.shipStreet,
        street_number: req.body.shipStreetNum,
        zipcode: req.body.shipZipcode,
    };
    let ship = {
        name: req.body.shipName,
        fee: "100",
        delivery_date: new Date().toISOString().substr(0, 10),
        expedited: true,
        Address: multiAdress
    };
    let billing = {
        name: req.body.shipName,
        address: multiAdress
    };
    let card = {
        card_number: "4111111111111111",
        card_cvv: "123",
        card_expiration_date: "0922",
        card_holder_name: 'daniel'
    };
    const itens = [
        { id: 1234, name: "Zanpakutou", UnitValue: 20000 },
        { id: 2345, name: "Chapeu de Palha", UnitValue: 5000 }
    ];
    let finalItem = itens.find(e => e.id == parseInt(req.body.itemName));
    let item = {
        quantity: req.body.itemQuantity,
        title: finalItem.name,
        tangible: true,
        unit_price: finalItem.UnitValue.toString(),
        id: finalItem.id.toString()
    };
    let transaction = new Transaction_1.Transaction(cust, ship, item, billing, card);
    // console.log(JSON.stringify(cust))
    // console.log(JSON.stringify(item))
    // console.log(JSON.stringify(card))
    // console.log(JSON.stringify(billing))
    // console.log(JSON.stringify(ship))
    try {
        pagarme_1.default.client.connect({ api_key: 'ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa' })
            .then(client => client.transactions.create(JSON.stringify(transaction)));
    }
    catch (error) {
        console.log(error);
    }
    res.send(JSON.stringify(transaction));
});
server.listen(3000, () => {
    console.log("rodando!");
});
//# sourceMappingURL=main.js.map