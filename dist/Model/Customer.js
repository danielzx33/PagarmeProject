"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(body) {
        this.external_id = "0002";
        this.name = body.custName;
        this.type = "individual";
        this.country = "br";
        this.email = body.custEmail;
        this.documents = [{
                number: body.custCpf,
                type: "cpf"
            }],
            this.birthday = body.custBirthday;
        this.phone_numbers = [("+55" + body.custPhone)];
    }
}
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map