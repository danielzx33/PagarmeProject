import express from "express";
import pagarme from "pagarme";
import path from "path";
import bodyParser from "body-parser";
import { Customer } from "./Model/Customer";
import { Shipping } from "./Model/Shipping";
import { Item } from "./Model/Item";
import { Transaction } from "./Model/Transaction";
import { Billing } from "./Model/Billing";
import { Address } from "./Model/adress";
import { Card } from "./Model/Card";
import { SplitRule } from "./Model/SplitRule";
import { getBalanceById } from './Script/CompanyBalance'



//------config server
const server = express();
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "/Views"))
server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({ extended: true }));
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
    let Split: SplitRule[] = [
        { recipient_id: "re_cjqz7w03c015ojw6ffot0tdod", charge_processing_fee: true, liable: true, percentage: 30 },
        { recipient_id: "re_cjqtnw06c00i5v86edkmmlwzw", charge_processing_fee: true, liable: false, percentage: 70 }
    ]

    //-------select item
    let finalItem = itens.find(e => e.id == parseInt(req.body.itemName))


    ///--------init values for transaction----////
    let cust = new Customer(req.body)
    let multiAdress = new Address(req.body)
    let ship: Shipping = new Shipping(req.body, multiAdress)
    let billing: Billing = new Billing(req.body, multiAdress);
    let card: Card = new Card(req.body);
    let item: Item = new Item(req.body, finalItem)

    //-------create transaction--------//
    let transaction: Transaction = new Transaction(cust, ship, item, billing, card, Split);

    //--------run transaction------//
    try {
        pagarme.client.connect({ api_key: 'ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa' })
            .then(client => client.transactions.create(transaction))
            .then(a => res.send(a))
            .catch(erro => console.log(erro.response.errors));
        getBalanceById("re_cjqtnw06c00i5v86edkmmlwzw").then(res => console.log(res)).catch(e => console.log(e))
        getBalanceById("re_cjqz7w03c015ojw6ffot0tdod").then(res => console.log(res)).catch(e => console.log(e))

    } catch (error) {
        console.log("catch", error);
    }

});

server.listen(3000, () => {
    console.log(`Serviço online!`)
});
