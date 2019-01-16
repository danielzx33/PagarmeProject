import express from "express";
import {run  } from "./Pagarme";
import  pagarme from "pagarme";
import path from "path";
import bodyParser from "body-parser";
import { Customer } from "./Model/Customer";
import { Shipping } from "./Model/Shipping";
import { Item } from "./Model/Item";
import { Transaction } from "./Model/Transaction";
import { Billing } from "./Model/Billing";
import { Address } from "./Model/adress";
import { Card } from "./Model/Card";



//config server
const server = express();
server.set("view engine", "ejs");
server.set("views", path.join(__dirname ,"/Views" ))
server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({extended: true}));
console.log(path.join(__dirname , "/doidoa" ))

//end config


server.get("/", (req, res, next) =>{
    res.render("index");
    
});

server.post("/comprar", (req, res, next) =>{

///--------init values for transaction----////
    let cust: Customer = {
        external_id: "0002",
        name: req.body.custName,
        type: "individual",
        country : "br",
        email: req.body.custEmail,
        documents:[ {
            number: req.body.custCpf,
            type: "cpf"
        }],
        birthday: req.body.custBirthday,
        phone_numbers: [("+55"+req.body.custPhone)]
        
    }
    
    let multiAdress: Address = {
        country: "br" ,
        state: req.body.shipState,
        city: req.body.shipCity,
        neighborhood: req.body.shipNeighborhood,
        street: req.body.shipStreet,
        street_number: req.body.shipStreetNum,
        zipcode: req.body.shipZipcode,
    }
    let ship: Shipping = {
        name: req.body.shipName,
        fee: "100",    
        delivery_date: new Date().toISOString().substr(0,10),
        expedited: true,
        address: multiAdress
    }

    let billing:Billing = {
        name: req.body.shipName,
        address: multiAdress
    }

    let card: Card = {
    card_number: "4111111111111111",
    card_cvv: "123",
    card_expiration_date: "0922",
    card_holder_name: 'daniel'
    }

      
    const itens = [
        { id: 1234, name: "Zanpakutou", UnitValue: 20000},
        { id: 2345, name: "Chapeu de Palha", UnitValue: 5000}
      ];

    let finalItem = itens.find(e => e.id == parseInt(req.body.itemName))
      
    let item: Item = {
        quantity: req.body.itemQuantity,
        title: finalItem.name,
        tangible: true,
        unit_price: finalItem.UnitValue.toString(),
        id: finalItem.id.toString()
    }

    let transaction: Transaction = new Transaction(cust,ship, item, billing,card);



    console.log(JSON.stringify(cust))
    console.log(JSON.stringify(item))
    console.log(JSON.stringify(card))
    console.log(JSON.stringify(billing))
    console.log(JSON.stringify(ship))

    try {
        
        pagarme.client.connect({api_key: 'ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa'})
        .then(client => client.transactions.create(transaction)).then(tran => console.log(tran)).catch(erro =>
            console.log(erro.response.errors))
            
        
    }catch (error) {
        console.log()
    }
    res.send(JSON.stringify(transaction))
 });
    
server.listen(3000,()=>{
    console.log("rodando!")
});
    