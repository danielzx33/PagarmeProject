import { Address } from "./Address";

export class Shipping {

    public name: string;
    public fee: string;
    public address: Address;
    public delivery_date: string;
    public expedited: boolean;


    constructor(body, multiAdress){
        this.name = body.shipName,
        this.fee = "100",    
        this.delivery_date = new Date().toISOString().substr(0,10),
        this.expedited = true,
        this.address = multiAdress
    }



}