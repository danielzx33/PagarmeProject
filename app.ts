import express from "express";
import pagarme from "pagarme";
import path from "path";
import bodyParser from "body-parser";
import { Customer } from "./Model/Customer";
import { Shipping } from "./Model/Shipping";
import { Item } from "./Model/Item";
import { CardTransation } from "./Model/CardTransaction";
import { Billing } from "./Model/Billing";
import { Address } from "./Model/Address";
import { Card } from "./Model/Card";
import { SplitRule } from "./Model/SplitRule";
import { getBalanceById } from './Script/CompanyBalance'
import { Transaction } from "./Model/Transaction"



//------config server
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/Views"))
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
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

    let transaction: Transaction
    let transType = req.body.paymentType;

    //-------create transaction--------//
    if (transType == "boleto") {

        transaction = new Transaction(cust, ship, item, billing, Split, transType);
    } else {

        transaction = new CardTransation(cust, ship, item, billing, Split, card, transType);
    }

    //--------run transaction------//
    try {

        pagarme.client.connect({ api_key: 'ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa' })
            .then(client => client.transactions.create(transaction))
            .then(response => console.log(response))
            .catch(error => console.log(error.response.errors));


    } catch (error) {
        console.log(error);
    }


    //Retorna o Balanço

    let companiesBalance: any[2] = new Array();

    getBalanceById(Split[0].recipient_id).then(Company => {
        companiesBalance.push(Company)
    }).then(() => {
        getBalanceById(Split[1].recipient_id).then(Company => {
            companiesBalance.push(Company)
        }).then(() => {
            res.render("Companies", { companies: companiesBalance })
        })
    }).catch(e => console.log(e))


});

app.listen(3000, () => {
    console.log(`Serviço online!`)
});
