"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(body) {
        this.country = "br";
        this.state = body.shipState;
        this.city = body.shipCity;
        this.neighborhood = body.shipNeighborhood;
        this.street = body.shipStreet;
        this.street_number = body.shipStreetNum;
        this.zipcode = body.shipZipcode;
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map