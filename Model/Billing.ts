import { Address } from "./Address";

export class Billing{
    
    public name: string;
    public address: Address;
  

    constructor(body, multiAdress){
        this.name = body.shipName,
        this.address = multiAdress
    }
}


    

     
    