"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pagarme_1 = __importDefault(require("pagarme"));
exports.run = pagarme_1.default.client.connect({ api_key: 'ak_test_k45SfJbFXR5nlk8aqFccKC4GWAguKa' })
    .then(client => client.transactions.create({
    amount: "21000",
    card_number: "4111111111111111",
    card_cvv: "123",
    card_expiration_date: "0922",
    card_holder_name: "Morpheus Fishburne",
    customer: {
        external_id: "#3311",
        name: " Morpheus Fishburne",
        type: "individual",
        country: "br",
        email: "mopheus@nabucodonozor.com",
        documents: [
            {
                type: "cpf",
                number: "00000000000"
            }
        ],
        phone_numbers: ["+5511999998888", "+5511888889999"],
        birthday: "1965-01-01"
    },
    billing: {
        name: "Trinity Moss",
        address: {
            country: "br",
            state: "sp",
            city: "Cotia",
            neighborhood: "Rio Cotia",
            street: "Rua Matrix",
            street_number: "9999",
            zipcode: "06714360"
        }
    },
    shipping: {
        name: "Neo Reeves",
        fee: "1000",
        delivery_date: "2002-12-21",
        expedited: true,
        address: {
            country: "br",
            state: "sp",
            city: "Cotia",
            neighborhood: "Rio Cotia",
            street: "Rua Matrix",
            street_number: "9999",
            zipcode: "06714360"
        }
    },
    items: [
        {
            id: "r123",
            title: " Red pill",
            unit_price: "10000",
            quantity: "1",
            tangible: true
        },
        {
            id: "b123",
            title: "Blue pill",
            unit_price: "10000",
            quantity: "1",
            tangible: true
        }
    ]
}));
//# sourceMappingURL=Pagarme.js.map